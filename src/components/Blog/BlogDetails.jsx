import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../../customHook/useFetch';

const BlogDetails = ()=> {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogData/'+id);
    const history = useHistory();
    const handleDelete = ()=>{ 
        fetch('http://localhost:8000/blogData/'+ blog.id, {
            method: 'DELETE'
        }).then(()=>{ 
            history.push('/blog');
        })
    }
    const handleEdit = (id) =>{ 

        history.push(`/modefied/${id}`);

        // fetch('http://localhost:8000/blogData/' + id,{
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify() 
        // }) 

    }

    return (
        <div className="blog-details">
            {error &&  <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {
                blog && (
                    <article> 
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button className="btn-danger btn-sm btn-shadow" onClick={handleDelete}>Delete</button>
                        <button className="btn-danger btn-sm btn-shadow" onClick={()=>handleEdit(blog.id)}>Edit</button>
                    </article> 
                ) 
            }
        </div>
    )
}

export default BlogDetails;
