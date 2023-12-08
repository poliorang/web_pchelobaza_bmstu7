import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export const TOKEN_KEY = 'bee:token';

export const useToken = () => {

    const context = useContext(AuthContext);

    const setToken = (token: string) => {
        localStorage.setItem(TOKEN_KEY, token);
        context.setToken(token)
    }

    const clearToken = () => {
        localStorage.removeItem(TOKEN_KEY);
        context.setToken("")
    }

    return {
        token: context.token,
        setToken: setToken,
        clearToken,
    }

}
