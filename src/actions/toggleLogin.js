export const TOGGLE_LOGIN = "TOGGLE_LOGIN";
export const TOGGLE_REGISTER = "TOGGLE_REGISTER";

export function toggleLogin() {
    return {
        type: TOGGLE_LOGIN
    }
}

export function toggleRegister() {
    return {
        type: TOGGLE_REGISTER
    }
}