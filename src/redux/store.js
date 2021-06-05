import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./reducers/productReducer";

export const store = createStore(productReducer, composeWithDevTools());
