import {useEffect} from "react";
import {register} from "../../api/auth.ts";

export const Register = () => {

    useEffect(()=>{
        const response=register({
            email: "ualikhan@gmail.com",
            password: "123456abcdef"
        })
        console.log(response)
    }, [])

    return (
        <div>
            Register
        </div>
    );
};
