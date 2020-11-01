import { GRID_ACTIONS } from "../types/consts";

export const iterate = (dispatch) => {

  dispatch({
    type: GRID_ACTIONS.ITERATION,
    payload: [],
  });
};
