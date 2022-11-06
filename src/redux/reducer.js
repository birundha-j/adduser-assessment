import { ALL_CATEGORY } from "./constant";

const INITIAL_STATE = {
  getCategoryList: []
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_CATEGORY:
      return {
        ...state,
        getCategoryList: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
