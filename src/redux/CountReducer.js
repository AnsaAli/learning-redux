import { count_Action } from "./ActionType";

const initialState = {
    Current_Number : 10
}

const CountReducer = (state = initialState, action)=>{
    switch(action.type){
        case count_Action : return({...state, Current_Number: state.Current_Number+ 1});
        default:
            return state;
    }
}

export default CountReducer;