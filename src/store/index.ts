import {combineReducers, createStore} from "redux";
import {authReducer} from "./authReducer.ts";

const combinedReducers= combineReducers({
    auth: authReducer
})

export const store=createStore(combinedReducers)
