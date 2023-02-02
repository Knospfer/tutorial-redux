import { INCREASE_COUNTER, RESET_COUNTER } from "./actions";

const initialState = {
  counter: 0,
};

//REDUX: the reducer contains all the functions that can update
// the store state based on the current or the initial state
//of the store
//For every ACTION there is a function in the reducer
//that updates the store state
export function rootReducer(state = initialState, action) {
  //we must return a new object because store IS IMMUTABLE
  if (action.type === INCREASE_COUNTER) {
    console.log({ ...state, counter: state.counter++ });
    return { ...state, counter: state.counter++ };
  }

  if (action.type === RESET_COUNTER) return { ...state, counter: 0 };

  return state;
}
