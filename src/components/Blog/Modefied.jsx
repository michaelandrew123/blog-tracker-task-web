import {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router';
import useFetch from '../../customHook/useFetch';

const Modefied = ()=>{

    const {id} = useParams(); 
 
    //const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogData/'+id);
 
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState(''); 
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    useEffect(()=>{ 
        fetch('http://localhost:8000/blogData/'+id)
        .then(res=>res.json())
        .then(data=>{ 
            setTitle(data.title);
            setBody(data.body);
            setAuthor(data.author);  
        }).catch(err=>{
            console.log(err.message);
        }); 
    }, [])
     
    
    const handleUpdate = (e) => {
        e.preventDefault(); 
        const blog = {
            title,
            body,
            author
        }  
        setIsPending(true)
        fetch("http://localhost:8000/blogData/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        .then(res=>res.json())
        .then(()=>{
            setIsPending(false); 
            history.push('/blog'); 
        })
        .catch(err=>{
            console.log(err.message);
        })

    }
    return (
        <>

            {/* {blog &&  */}

                <form className="add-form" onSubmit={handleUpdate}>
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
                        <select 
                        value={author} 
                        onChange={(e)=>setAuthor(e.target.value)} 
                        >
                            <option value="michael"> michael </option>
                            <option value="andrew"> andrew </option>
                            <option value="suarez"> suarez </option>
                        </select>
                    </div>
                    {!isPending && <input type="submit" className="mx-10 bg-black white p-10 btn-sm" value="Update Blog" />}
                    {isPending && <input type="submit" className="mx-10 bg-black white p-10 btn-sm" value="Updating Blog..." disabled />}   
                  
                </form>  

            {/* } */}

        </>
    );
}

export default Modefied;