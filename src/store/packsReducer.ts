import {getPacks} from "../api/packs.ts";
import {ApiTypes} from "../api/apiTypes.ts";
import {Dispatch} from "redux";

type GetPacksAT = {
    type: "SET_PACKS",
    packs: any
}

type ActionType = GetPacksAT


const initialState = {
    packs: null,

}

export const packsReducer = (state = initialState, action:ActionType) => {
    switch (action.type) {
        case "SET_PACKS": {
            return {
                ...state,
                packs: action.packs
            }
        }
    }
    return state
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