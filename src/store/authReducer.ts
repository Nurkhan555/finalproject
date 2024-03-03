type LoginAT = {
    type: "LOGIN",
}

type RegisterAT = {
    type: "REGISTER",

}

type ForgotPasswordAT = {
    type: "FORGOT_PASSWORD",

}

type ActionType = LoginAT | RegisterAT | ForgotPasswordAT

type InitialStateAuth = {
    isAuth: boolean,
}

const initialState:InitialStateAuth = {
    isAuth: false,
}


export const authReducer = (state=initialState, action: ActionType)=> {
    switch(action.type) {
        case "LOGIN": {
            return
        }
        case "REGISTER": {
            return
        }
        case "FORGOT_PASSWORD": {
            return
        }
        default: return state
    }
}

