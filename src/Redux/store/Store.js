import { createStore } from "redux";
import reducers from "../reducers/Reducer";

const store = createStore(reducers);

export default store;
