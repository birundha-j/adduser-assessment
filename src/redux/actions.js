import { ALL_CATEGORY, ADDED_CATEGORY } from "./constant";
import axios from "axios";

export const getAllCategoryList = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://60e0428d6b689e001788c9a7.mockapi.io/add_task`
    );
    dispatch(allCategory(res.data, true));
  } catch (err) {}
};

export const allCategory = (payload, key = false) => async (dispatch) => {
    if (!key) {
      localStorage.setItem("allList", JSON.stringify(payload));
    }
    dispatch({
      type: ALL_CATEGORY,
      payload: payload,
    });
  };
