import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreanReducer'
import breadReducer from './bread/breadReducer'
import userReducer from './user/userReducer'


const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer,
     bread: breadReducer,
     user: userReducer
}) 

export default rootReducer;