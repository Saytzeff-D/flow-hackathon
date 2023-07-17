import { combineReducers } from "redux";
import ApiReducer from "./api";
import DialogReducer from "./dialog";

const AppRedux = combineReducers({ ApiReducer, DialogReducer })

export default AppRedux