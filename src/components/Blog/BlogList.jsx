import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const BlogList = ({blogs, title, onDelete}) =>{
    return (
        <> 

            <h2>{title}</h2>
            <ul>   
                {blogs.map((blog)=> ( 
                    <li key={blog.id} >
                        <Link to={`/blogs/${blog.id}`}> 
                            <h3>{blog.title}</h3>
                            <p>Written by: {blog.author}</p> 
                        </Link>
                        {/* <FaTimes  
                        className="remove-task" 
                        onClick={()=>onDelete(blog.id)}
                    /> */}
                    </li> 
                ))}
            </ul>
        </>
    );
}


export default BlogList;