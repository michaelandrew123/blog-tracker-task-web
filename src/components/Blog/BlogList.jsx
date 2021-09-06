import {FaTimes} from 'react-icons/fa';


const BlogList = ({blogs, title, onDelete}) =>{
    return (
        <> 

            <h2>{title}</h2>
            <ul>   
                {blogs.map((blog)=> ( 
                    <li key={blog.id} >
                        
                        <h3>{blog.title}</h3>
                        <p>Written by: {blog.author}</p>


                        <FaTimes  
                        className="remove-task" 
                        onClick={()=>onDelete(blog.id)}
                    />
                    </li> 
                ))}
            </ul>
        </>
    );
}


export default BlogList;