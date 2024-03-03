import {useEffect} from "react";
import {login} from "../../api/auth.ts";

export const Login = () => {

    useEffect(()=>{
        const response= login({
            email: "nurkhan@gmail.com",
            password: "123456abcdef",
            rememberMe: true
        })
        console.log(response)
    }, [])

    return (
        <div>
            Login
        </div>
    );
};

