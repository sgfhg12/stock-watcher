import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import stocks from "./redux/stock.js";
import errors from "./redux/error.js";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  stocks,
  errors
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store;
