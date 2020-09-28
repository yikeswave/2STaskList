import { combineReducers } from "redux";

import app from "./app";
import desks from "./desks";
import columns from "./columns";
import cards from "./cards";

const reducer = combineReducers({
  app,
  desks,
  columns,
  cards,
});

export default reducer;
