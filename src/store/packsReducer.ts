import {createPack, getPacks} from "../api/packs.ts";
import {ApiTypes} from "../api/apiTypes.ts";
import {Dispatch} from "redux";

type GetPacksAT = {
    type: "SET_PACKS",
    packs: ApiTypes.Packs.Get.Resp
}

type SetFilter = {
    type: 'SET_FILTER',
    filter: Filter
}

export type Filter = 'my' | 'all';

export type InitialPacksState = {
    packs: null | ApiTypes.Packs.Get.Resp,
    filter: Filter
}

const initialState: InitialPacksState = {
    packs: null,
    filter: 'all'
}

type ActionType = GetPacksAT | SetFilter

export const packsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_PACKS": {
            return {
                ...state,
                packs: action.packs
            }
        }
        case "SET_FILTER": {
            return {
                ...state,
                filter: action.filter
            }
        }
    }
    return state
}


export const setFilterAC = (filter: Filter) => {
    return {type: 'SET_FILTER', filter}
}
const getPacksAC = (packs: ApiTypes.Packs.Get.Resp) => {
    return {type: "SET_PACKS", packs}
}

export const getPacksTC = (query: ApiTypes.Packs.Get.Query) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await getPacks(query)
            dispatch(getPacksAC(res.data))
        } catch (error) {
            console.error(error)
        }
    }
}

export const createPackTC = (body: ApiTypes.Packs.Post.Req) => {
    return async (dispatch: Dispatch) => {
        try {
            await createPack(body)
            dispatch<any>(getPacksTC({}))
        } catch (e) {
            console.error(e)
        }
    }
}