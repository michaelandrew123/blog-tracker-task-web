// import { createStore } from 'redux'



// const counterReducer = (state = { value: 0 }, action) => {
//     switch (action.type) {
//       case 'counter/incremented':
//         return { value: state.value + 1 }
//       case 'counter/decremented':
//         return { value: state.value - 1 }
//       default:
//         return state
//     }
//   }


// let store = createStore(counterReducer)

// store.subscribe(() => console.log(store.getState()))


// store.dispatch({ type: 'counter/incremented' })
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' })
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' })

// export default counterReducer;

//import redux from 'redux';
//const redux = require('redux');


import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux-logger';
//const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake=()=>{ 
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const buyIceCream = () =>{
    return {
        type: BUY_ICECREAM
    }
}

//(previousState, action) => newState

// const initialState={
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState= {
    numOfIceCreams:20
}

// const reducer = (state=initialState, action)=>{
//     switch(action.type){
//         case BUY_CAKE: return { 
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         } 
//         case BUY_ICECREAM: return { 
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         } 
//         default: return state; 
//     }
// }


const cakeReducer = (state=initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: return { 
            ...state,
            numOfCakes: state.numOfCakes - 1
        }  
        default: return state; 
    }
}

const iceCreamReducer = (state=initialIceCreamState, action)=>{
    switch(action.type){ 
        case BUY_ICECREAM: return { 
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        } 
        default: return state; 
    }
}


const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initail state', store.getState());
const unsubscribe = store.subscribe(()=>console.log('Update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe();

export default buyCake;