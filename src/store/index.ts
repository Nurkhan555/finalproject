import {combineReducers, createStore, applyMiddleware} from "redux";
import {authReducer} from "./authReducer.ts";
import {thunk} from "redux-thunk";


const combinedReducers= combineReducers({
    auth: authReducer
})

export const store=createStore(combinedReducers, undefined, applyMiddleware(thunk))
