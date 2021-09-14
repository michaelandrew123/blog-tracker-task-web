import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import BlogList from '../components/Blog/BlogList';
import Create from '../components/Create';
import useFetch from '../customHook/useFetch';

const Blog = ()=>{

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogData'); 
    const [name, setName] = useState('Michael'); 
    const [showAdd, setShowAdd] = useState(false);
    
        const handleName = ()=>{ 

            if(name === 'Michael'){ 
                setName('Andrew'); 
            }else{ 
                setName('Michael'); 
            }
        } 
        // const handleBlogTitle = ()=>{ 
        //      blogs.filter(blog=> blog.author === 'Suarez')
        // }

        // const handleBlogDelete = (id)=>{  
        //     const newBlogs = blogs.filter(blog=> blog.id !== id);
        //     setBlogs(newBlogs);
        // }

        
 

    // useEffect(()=>{
    //     console.log(length)
    // }, [])
    return (
        <> 
            {/* <h3>This is blog page! - { id }</h3> */} 
         
            
            <button className="btn-sm " onClick={() => setShowAdd(!showAdd)} >{showAdd ? 'Close' : 'Add'}</button>
            { showAdd &&  <Create />  }
            
            <h2>{name}</h2>
            <button className="btn-sm" onClick={handleName}>Change name</button>

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            { blogs 
            &&  
            <>
                <BlogList blogs={blogs} title="Random Blog"  />  
                {
                    blogs.filter(blog=> blog.author === 'Suarez').length > 0 ? (
                    <BlogList blogs={blogs.filter(blog=> blog.author === 'Suarez') } title="Suarez's Blog"  />
                    ) : ''
                }  
            </> 
            }
            

          {/*  
            onDelete={handleBlogDelete}
          <BlogList blogs={blogs.filter(blog=> blog.author === 'Suarez') } title="Suarez's Blog" onDelete={handleBlogDelete}/>
         */}
        </>     
    )
}

export default Blog;