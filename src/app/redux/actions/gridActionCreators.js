import { GRID_ACTIONS } from "../types/consts";

export const iterate = (dispatch) => {
  dispatch({
    type: GRID_ACTIONS.ITERATION,
    payload: [],
  });
};

export const generate = (rowsCount, colsCount, dispatch) => {
  let rows = [];
  for (let r = 0; r < rowsCount; r++) {
    let row = [];
    for (let c = 0; c < colsCount; c++) {
      let cell = {};
      if(Math.random() > 0.5) {
        cell = {status: "alive"}
      } else {
        cell = {status: "dead"}
      }

      row.push(cell);
    }

    rows.push(row);
  }

  dispatch({
    type: GRID_ACTIONS.SEED,
    payload: rows,
  });
};
