import { TOGGLE_LOGIN, TOGGLE_REGISTER } from '../actions/toggleLogin';

const initialState = {
    toggleLogin: false,
    toggleRegister: false,
}

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case TOGGLE_LOGIN:
            return {
                ...state,
                toggleLogin: !state.toggleLogin
            };
        case TOGGLE_REGISTER:
            return {
                ...state,
                toggleRegister: !state.toggleRegister
            }
        default:
            return state;
    }
}