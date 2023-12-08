import { createContext } from "react";

export interface User {
    id: string;
    role: string;
}

interface IAuthContext {
    token: string;
    setToken: (token: string) => void;

    login: string;
    setLogin: (login: string) => void;

    user: User;
    setUser: (user: User) => void;
}

export const AuthContext = createContext<IAuthContext>({
    token: "",
    setToken: () => {},
    login: "",
    setLogin: () => {},
    user: { id: "", role: "" },
    setUser: () => {},
});
