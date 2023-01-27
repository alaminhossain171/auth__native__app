import { combineReducers } from "redux";
import types from "../types";

import authReducer from "./authReducer";
const appReducer=combineReducers({
authReducer
})
const rootReducers=(state,action)=>{
   if(action.type==types.CLEAN_STATE_REDUX){
    state=undefined
   }
   return appReducer(state,action)
}
export default rootReducers;