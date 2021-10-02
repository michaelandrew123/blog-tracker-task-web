import {useSelector, useDispatch} from 'react-redux'; 
import { Link } from 'react-router-dom';
import { increment, decrement } from '../redux/actions';
 

const Redux = () =>{
    
  //extract redux counter

  const counter = useSelector(state=> state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
    return (
        <>  
            <div>
                <Link to="/cakeShop" >Cake Shop</Link> <br />
                <Link to="/account" >Account</Link> 
            </div>
            <br />
            <br />
            <h3>In-Progress</h3>
            <div>Counter : {counter} </div> 

            { isLogged ? <div>Valuable information I shouldn't see.</div> : ''}

            <button onClick={()=>dispatch(increment(2))}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
 
        </>
    )
}

export default Redux;