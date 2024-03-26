import {$api} from "./index.ts";
import {ApiTypes} from "./apiTypes.ts";
import {AxiosResponse} from "axios";

export const getPacks =(query:ApiTypes.Packs.Get.Query,)=> {
    const token = localStorage.getItem("userToken")
    return $api.get<ApiTypes.Packs.Get.Query,AxiosResponse<ApiTypes.Packs.Get.Resp>>("/cards/pack",{
        params:query,
        headers: {
            Authorization:'Bearer ' + token
        }
    })
}