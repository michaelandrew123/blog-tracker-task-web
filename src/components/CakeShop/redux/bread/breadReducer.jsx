import { BUY_BREAD } from "./breadType";

const initialState = {
    numOfBread: 50
}

const breadReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_BREAD:
            return{
                ...state,
                numOfBread: state.numOfBread - 1 
            }
        default: return state
    }
}

export default breadReducer;