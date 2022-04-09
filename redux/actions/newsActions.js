import { dispatch } from "../store";
import * as t from "../types";

// Layout section
export const setCategory = (category) => {
  dispatch({ type: t.SET_CATEGORY, payload: category });
};




