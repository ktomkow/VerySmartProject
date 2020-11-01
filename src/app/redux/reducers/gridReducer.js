import { GRID_ACTIONS } from "../types/consts";

const initialState = {
  rows: [{id: 0, cells:[]}]
};

function gridReducer(state = initialState, action) {
  if (action.type === GRID_ACTIONS.ITERATION) {
    return Object.assign({}, state, {
      rows: state.rows
    });
  }

  if (action.type === GRID_ACTIONS.SEED) {
    return Object.assign({}, state, {
      rows: action.payload,
    });
  }

  if (action.type === GRID_ACTIONS.SWITCH) {
    let rows = state.rows;
    let row = rows.find(x => x.id === action.cell.rowId);
    let cell = row.cells.find(c => {if(c.id === action.cell.id) return c;});
    cell.status = "alive";
    cell.power = 255;

    return Object.assign({}, state, {
      rows: rows
    });
  }

  return state;
}

export default gridReducer;
