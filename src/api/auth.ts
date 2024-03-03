import {$api} from "./index.ts";
import {ApiTypes} from "./apiTypes.ts";

export const login = async (body: ApiTypes.Login.Req) => {
    return $api.post<ApiTypes.Login.Req, ApiTypes.Login.Resp>("/auth/login", body)
}

export const register = async (body: ApiTypes.Register.Req) => {
    return $api.post<ApiTypes.Register.Req, ApiTypes.Register.Resp>("/auth/register", body)
}

export const setNewPassword = async (body: ApiTypes.SetNewPassword.Req) => {
    return $api.post<ApiTypes.SetNewPassword.Req, ApiTypes.SetNewPassword.Resp>("/auth/set-new-password", body)
}

export const forgotPassword = async (body: ApiTypes.ForgotPassword.Req) => {
    return $api.post<ApiTypes.ForgotPassword.Req, ApiTypes.ForgotPassword.Resp>("/auth/forgot", body)
}