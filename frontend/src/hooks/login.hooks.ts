import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export const LOGIN_KEY = 'bee:login';

export const useLogin = () => {

    const context = useContext(AuthContext);

    const setLogin = (login: string) => {
        localStorage.setItem(LOGIN_KEY, login);
        context.setLogin(login)
    }

    const clearLogin = () => {
        localStorage.removeItem(LOGIN_KEY);
        context.setToken("")
    }

    return {
        login: context.login,
        setLogin: setLogin,
        clearLogin
    }

}
