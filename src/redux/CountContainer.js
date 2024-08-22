import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Count from "./Action";

const CountContainer = () => {
  const currentNum = useSelector((state) => state.Current_Number);
  const dispatch = useDispatch();

  const handleCount =async () => {
    dispatch(Count());
  };
  return (
    <>
      <div>Count Container</div>
      <p>Current count -{currentNum} </p>
      <button onClick={handleCount}>Count</button>
    </>
  );
};

export default CountContainer;
