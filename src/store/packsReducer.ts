import {getPacks} from "../api/packs.ts";
import {ApiTypes} from "../api/apiTypes.ts";
import {Dispatch} from "redux";

type GetPacksAT = {
    type: "SET_PACKS",
    packs: any
}

type SetFilter = {
    type:'SET_FILTER',
    filter: Filter
}

export type Filter = 'my' | 'all';

type InitialState = {
    packs: null,
    filter: Filter
}

const initialState:InitialState = {
    packs: null,
    filter: 'all'
}

type ActionType = GetPacksAT | SetFilter

export const packsReducer = (state = initialState, action:ActionType) => {
    switch (action.type) {
        case "SET_PACKS": {
            return {
                ...state,
                packs: action.packs
            }
        }
        case "SET_FILTER":{
            return {
                ...state,
                filter: action.filter
            }
        }
    }
    return state
}


export const setFilterAC = (filter:Filter) =>{
    return {type:'SET_FILTER', filter}
}
const getPacksAC = (packs: any) => {
    return {type: "SET_PACKS", packs}
}

export const getPacksTC = (query:ApiTypes.Packs.Get.Query) => {
    return async(dispatch:Dispatch)=> {
        try{
            const res = await getPacks(query)
            dispatch(getPacksAC(res.data))
        }
        catch (error){
            console.error(error)
        }
    }
}