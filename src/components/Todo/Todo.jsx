import {useState} from 'react'; 
import '../../css/Todo.css';
import Backdrop from './Backdrop';
import Modals from './Modals';



const Todo = ({title}) =>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const handleDelete = () =>{     
        setModalIsOpen(true);
    }
    const closeModalHandler=()=>{ 
        setModalIsOpen(false);
    }
    return (
        <> 
            <div className="card">
                <h3> {title} </h3>
                <div className="actions">
                    <button className="btn" onClick={handleDelete}>Delete</button>
                </div>
                {
                modalIsOpen && <> 
                    <Modals onModalClose={closeModalHandler} onModalConfirm={closeModalHandler} />
                    <Backdrop onModalClose={closeModalHandler}/>
                </>
                }
            </div> 
            <br/>
          
        </>
    )
}

export default Todo;