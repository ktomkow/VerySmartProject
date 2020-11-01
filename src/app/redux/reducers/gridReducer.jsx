import { GRID_ACTIONS } from "../types/consts";

const initialState = {
  cells: [],
};

function gridReducer(state = initialState, action) {
  if (action.type === GRID_ACTIONS.ITERATION) {
    return Object.assign({}, state, {
        cells: action.payload
    });
  }

  return state;
}

export default gridReducer;