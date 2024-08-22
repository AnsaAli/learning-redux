import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAmount, decrement, increment, reset } from "./CountSlice";

const CountComponet = () => {
  const count = useSelector((state) => state.counter.count);

  const [amount, setAmount] = useState(0);

  const value = Number(amount);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        Count Componet
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <h2> Add amount to Count</h2>
        <input type='text' value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <button onClick={()=>dispatch(addAmount(value))}>Add</button>
      </div>
    </>
  );
};

export default CountComponet;
