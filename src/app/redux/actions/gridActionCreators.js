import { GRID_ACTIONS } from "../types/consts";

export const iterate = (dispatch) => {
  dispatch({
    type: GRID_ACTIONS.ITERATION,
    payload: [],
  });
};

export const switchCell = (cell, dispatch) => {
  dispatch({
    type: GRID_ACTIONS.SWITCH,
    cell: cell,
  });
};

export const generate = (rowsCount, colsCount, dispatch) => {
  let rows = [];
  let id = 0;
  for (let r = 0; r < rowsCount; r++) {
    let row = { id: r, cells: [] };
    for (let c = 0; c < colsCount; c++, id++) {
      const cell = { status: "dead", id: id, rowId: r, colId: c };

      row.cells.push(cell);
    }

    rows.push(row);
  }

  dispatch({
    type: GRID_ACTIONS.SEED,
    payload: rows,
  });
};
