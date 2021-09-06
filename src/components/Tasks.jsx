import React from 'react';
import Task from './Task';
const Tasks = ({tasks, onDelete, onToggle}) => { 
 
    return ( 
        <>     
            <Task 
                tasks={tasks} 
                onDelete={onDelete} 
                onToggle={onToggle}/> 
        </> 
    ); 
}

export default Tasks;