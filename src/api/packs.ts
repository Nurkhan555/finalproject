import {$api} from "./index.ts";
import {ApiTypes} from "./apiTypes.ts";

export const getPacks =(query:ApiTypes.Packs.Get.Query)=> {
    return $api.get("/cards/pack",{params:query})
}