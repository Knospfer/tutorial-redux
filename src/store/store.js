import { legacy_createStore } from "redux";
import { rootReducer } from "./reducers";

//REDUX: the store is the source of truth of the app
//Every component should update its state based on the store
//IMPORTANT: the store is IMMUTABLE, cannot be changed, only updated
export const rootStore = legacy_createStore(rootReducer);
