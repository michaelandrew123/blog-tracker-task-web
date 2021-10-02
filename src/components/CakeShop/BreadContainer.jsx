import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyBread } from './redux/redux';

const HooksBreadContainer = ()=>{
    const numOfBread = useSelector(state=>state.bread.numOfBread);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Number of Cake - {numOfBread}</h2> 
            <button onClick={()=>dispatch(buyBread())}>Buy Bread</button>
        </div>
    )
}

export default HooksBreadContainer;