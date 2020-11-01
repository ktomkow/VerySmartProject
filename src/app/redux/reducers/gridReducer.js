import { GRID_ACTIONS } from "../types/consts";

const cell = {status: "alive"}
const row = [cell, cell];

const initialState = {
  rows: [row, row, row],
};

function gridReducer(state = initialState, action) {
  if (action.type === GRID_ACTIONS.ITERATION) {
    return Object.assign({}, state, {
      rows: action.payload
    });
  }

  return state;
}

export default gridReducer;