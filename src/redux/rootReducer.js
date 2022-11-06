import { combineReducers } from "redux";

import Reducer from "./reducer";

const rootReducer = combineReducers({
  category: Reducer,
});

export default rootReducer;
