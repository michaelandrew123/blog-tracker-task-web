import Tasks from '../components/Tasks'; 
import Button from '../components/Button'; 
import AddTask from '../components/AddTask';
import {useState} from 'react'



const Home = ({onAdd, tasks, onDelete, onToggle}) => {
    const [showAddTask, setShowAddTask] = useState(false)
    return (

        <>
            <div className="tasks"> 
            <div className="flex flex-row-reverse"> 
                <Button 
                onAddBtn={
                    () => setShowAddTask(!showAddTask)
                } 
                title={
                    showAddTask ? 'Close' : 'Add'
                } 
                addClass={
                    `btn-sm ${showAddTask ? 'btn-danger' : 'btn-success'} left`
                }
                />
            </div>
            {showAddTask && <AddTask onAdd={onAdd} />}
            {
                tasks.length > 0 ? 
                (<Tasks 
                    tasks={tasks} 
                    onDelete={onDelete} 
                    onToggle={onToggle}/>) :
                ( 'No Tasks Recorded' )
            }
            </div>




        </>

    )

}

export default Home;