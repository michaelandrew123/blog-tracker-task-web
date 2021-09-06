import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import BlogList from '../components/Blog/BlogList';

const Blog = ()=>{


    const { id } = useParams();

    const [ blogs, setBlogs ] = useState()

    const [name, setName] = useState('Michael');

        const handleName = ()=>{ 
            setName('Andrew'); 
        }

        // const handleBlogTitle = ()=>{ 
        //      blogs.filter(blog=> blog.author === 'Suarez')
        // }

        const handleBlogDelete = (id)=>{ 
            console.log("Delete item" + id)
            const newBlogs = blogs.filter(blog=> blog.id !== id);
            setBlogs(newBlogs);
        }


        useEffect(()=>{
            fetch('http://localhost:3000/blogData')
                .then(res => {
                    return res.json();
                })
                .then(data=>{
                    console.log(data)
                })
        }, [])
 
    return (
        <> 
            {/* <h3>This is blog page! - { id }</h3> */} 
            <h2>{name}</h2>

            <button className="btn-sm" onClick={handleName}>Change name</button>
            <BlogList blogs={blogs} title="Random Blog" onDelete={handleBlogDelete}/>
            <BlogList blogs={blogs.filter(blog=> blog.author === 'Suarez') } title="Suarez's Blog" onDelete={handleBlogDelete}/>
        </>     
    )
}

export default Blog;