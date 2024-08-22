import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecremenAction, IncrementAction } from "./AddSubCountAction";

const AddSubCounter = () => {
  const currentnum = useSelector((state) => state.currentNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div>Add Sub Counter</div> <br></br>

        <button onClick={()=> dispatch(DecremenAction())} >Decrement</button>
        <p>{currentnum}</p>
        <button onClick={()=> dispatch(IncrementAction())}>Increment</button>
      
    </>
  );
};

export default AddSubCounter;
