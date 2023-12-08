import { useContext, useEffect } from "react";
import { AuthContext, User } from "../context/AuthContext";

export const USER_KEY = 'bee:user';

export const useUser = () => {

    const context = useContext(AuthContext);

    const setUser = (user: User) => {
        localStorage.setItem(USER_KEY, JSON.stringify(user))
        context.setUser(user)
    }

    const clearUser = () => {
        localStorage.removeItem(USER_KEY);
        context.setUser({ id: "", role: "" })
    }

    return {
        user: context.user,
        setUser: setUser,
        clearUser,
    }
}
