//REDUX: the actions are called by the react component
//to update the store state through the reducer

//every action should have a clear name
//that explains what the action should do
export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";

//Actions could have payload when needed,
//now we do not need them
export function increaseCounter(payload) {
  return { type: INCREASE_COUNTER, payload };
}

export function resetCounter(payload) {
  return { type: RESET_COUNTER, payload };
}
