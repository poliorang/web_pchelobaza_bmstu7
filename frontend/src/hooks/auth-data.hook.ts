
import { useContext, } from "react";
import { AuthContext } from "../context/AuthContext";
import { useToken } from "./token.hook";
import { useUser } from "./user.hook";

export const useAuthData = () => {
    useToken();
    useUser();

    const context = useContext(AuthContext);

    const isBeeman = context.user.role === 'beeman';
    const isBeemaster = context.user.role === 'beemaster';
    const isAdmin = context.user.role === 'beeadmin'

    return {
        login: context.login,
        token: context.token,
        userId: context.user.id,
        userRole: context.user.role,
        isBeeman,
        isBeemaster,
        isAdmin,
    }

}
