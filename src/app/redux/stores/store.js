import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import gridReducer from "../reducers/gridReducer";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  gridReducer,
});

const store = createStore(reducers, storeEnhancers(applyMiddleware(thunk)));

export default store;
