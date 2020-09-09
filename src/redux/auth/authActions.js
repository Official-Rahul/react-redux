import { LOGIN, LOGOUT } from "./authTypes";

export const login = () => {
    return {
        type: LOGIN
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}