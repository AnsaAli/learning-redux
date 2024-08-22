import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CountSlice";

const CountComponet = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div>Count Componet</div>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  );
};

export default CountComponet;
