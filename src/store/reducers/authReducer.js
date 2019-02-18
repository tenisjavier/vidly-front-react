//@desc     Auth Reducer that will change the auth state in redux
const initState = {};

function authReducer(state = initState, action) {
    if (action.type === "GET_CURRENT_USER") {
        if (action.user) return action.user;
    }

    return state;
}

export default authReducer;
