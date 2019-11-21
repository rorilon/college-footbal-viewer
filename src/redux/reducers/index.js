import { combineReducers } from "redux";
import teams from "./teams";
import pagination from "./pagination";
import conferences from "./conferences";

export default combineReducers({
  teams,
  pagination,
  conferences
});
