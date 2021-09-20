import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreanReducer'

const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer
}) 

export default rootReducer;