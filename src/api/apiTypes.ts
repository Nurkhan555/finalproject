
export namespace ApiTypes {
    export namespace Login {
        export type Req = {
            email: string
            password: string
            rememberMe: boolean
        }
        export type Resp = 	{
            _id: string;
            email: string;
            name: string;
            avatar?: string;
            publicCardPacksCount: number;
            created: Date;
            updated: Date;
            isAdmin: boolean;
            verified: boolean;
            rememberMe: boolean;
            error?: string;
        }
    }
    export namespace Register {
        export type Req = {
            email: string;
            password: string;
        }
        export type Resp = {
            addedUser: {}
            error?: string
        }
    }
    export namespace SetNewPassword {
        export type Req = {
            password: string
            resetPasswordToken: string
        }
        export type Resp = {
            info: string
            error: string
        }
    }
    export namespace ForgotPassword {
        export type Req = {
            email: string
            from: string
            message: string
        }
        export type Resp = {
            info: string
            error: string;
        }
    }
    export namespace AuthMe {
        export namespace Post {
            export type Req = {

            }
            export type Resp = {
                _id: string;
                email: string;
                name: string;
                avatar?: string;
                publicCardPacksCount: number; // количество колод

                created: Date;
                updated: Date;
                isAdmin: boolean;
                verified: boolean; // подтвердил ли почту
                rememberMe: boolean;

                error?: string;
            }
        }
        export namespace Put {
            export type Req = {
                name: string,
                avatar: string // url or base64
            }
            export type Resp = {
                updatedUser: Login.Resp
                error?: string
            }
        }
    }
}

