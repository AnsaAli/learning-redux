import { Decrement, Increment } from "./AddSubActionType";

export const IncrementAction = () => {
  return {
    type: Increment,
  };
};

export const DecremenAction = () => {
  return {
    type: Decrement,
  };
};
