import { Decrement, Increment } from "./AddSubActionType";

const initialState = {
    currentNumber : 0
}

const reducer = (state= initialState, action)=>{
   switch(action.type){

    case Increment : return { ...state,currentNumber: state.currentNumber + 1};

    case Decrement : return { ...state, currentNumber: state.currentNumber -1};

    default : return state;
   }
}

export default reducer;