import { GRID_ACTIONS } from "../types/consts";

const initialState = {
  rows: []
};

function gridReducer(state = initialState, action) {
  if (action.type === GRID_ACTIONS.ITERATION) {
    return Object.assign({}, state, {
      rows: action.payload
    });
  }

  if (action.type === GRID_ACTIONS.SEED) {
    return Object.assign({}, state, {
      rows: action.payload
    });
  }

  return state;
}

export default gridReducer;