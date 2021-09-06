import {FaTimes} from 'react-icons/fa';

const Task = ({tasks, onDelete, onToggle}) => {
    return (
        
        <ul>
            {tasks.map((task)=> (
                <li 
                    className={`task ${task.reminder ? 'reminder' : ''}`}
                    key={task.id}
                    onDoubleClick={() => onToggle(task.id)}
                    >
                    <span>{task.title}</span>
                    <br /> 
                    <small>{task.day}</small>

                    <FaTimes  
                        className="remove-task" 
                        onClick={()=>onDelete(task.id)}
                    />
                </li>
            ))} 
        </ul> 

    )
}

export default Task;