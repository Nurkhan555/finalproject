import './App.css'
import { Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "./pages/profile";
import {Login} from "./pages/login";
import {Register} from "./pages/register";
import {NewPassword} from "./pages/new-password";
import {ForgotPassword} from "./pages/forgot-password";

export function App() {
  return (
    <Routes>
        <Route path={'*'} element={<Navigate to={'/profile'}/>}/>
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/new-password'} element={<NewPassword/>}/>
        <Route path={'/forgot-password'} element={<ForgotPassword/>}/>
    </Routes>
  )
}

