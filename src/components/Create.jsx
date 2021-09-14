import {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('michael')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    

    const handleSubmit = (e) =>{
        e.preventDefault();

        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogData', { 
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })

    }

    return ( 
            <>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Blog Title: </label>
                    <input 
                        type="text" 
                        placeholder="Title"  
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)} 
                        required
                        />
                </div>
                <div className="form-group">
                    <label>Blog Body:</label>
                    <textarea  

                        value={body}
                        onChange={(e)=>setBody(e.target.value)} 
                        placeholder="What's in your mind"  
                        required 
                        rows="10"  
                    ></textarea>
                </div> 
                <div className="form-group">
                    <label>Blog Author </label>
                    <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                        <option value="michael"> michael </option>
                        <option value="andrew"> andrew </option>
                        <option value="suarez"> suarez </option>
                    </select>
                </div>
                {!isPending && <input type="submit" className="mx-10 bg-black white p-10 btn-sm" value="Add Blog" />}
                {isPending && <input type="submit" className="mx-10 bg-black white p-10 btn-sm" value="Adding Blog..." disabled />}
            </form>  
        </> 
    )
}

export default Create;
