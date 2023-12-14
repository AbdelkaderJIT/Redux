import { ADD_TODO, DELETE_TODO, IS_COMPLETE } from "./actionTypes";

const initState = [
  { id: 0, text: "do the checkpoint", isDone: false },
  { id: 1, text: "watch the record", isDone: false },
];
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((el) => el.id !== action.payload);
    case IS_COMPLETE:
      return state.map((el) =>
        el.id === action.payload ? { ...el, isDone: !el.isDone } : el
      );
    default:
      return state;
  }
};
