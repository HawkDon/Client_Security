const initialState = {
    toggle: false
}

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case "TOGGLE_LOGIN":
            return {
                ...state,
                toggle: !state.toggle
            };
        default:
            return state;
    }
}