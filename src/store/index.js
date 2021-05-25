import { createStore } from "redux";
import mainReducer from "../reducers";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(mainReducer, reduxDevtools && reduxDevtools());
export default store;