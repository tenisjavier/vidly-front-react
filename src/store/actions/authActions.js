// @desc    dispatch actions of auth also with async calls
import {
    serviceGetCurrentUser,
    serviceLogin,
    serviceCreateUser
} from "../../services/authService";

export function getCurrentUser() {
    return async (dispatch, getState) => {
        const result = await serviceGetCurrentUser();
        let user = {};
        if (result) user = result.data;

        dispatch({ type: "GET_CURRENT_USER", user });
    };
}

export function createUser(user) {
    return async (dispatch, getState) => {
        const email = user.username;
        const password = user.password;
        const name = user.name;
        const { data: newuser } = await serviceCreateUser({
            email,
            password,
            name
        });
        if (newuser.email) {
            await serviceLogin(email, password);
        }
    };
}

export function login(email, password) {
    return async (dispatch, getState) => {
        const result = await serviceLogin(email, password);
        let token = null;
        if (result) token = result.data;

        dispatch({ type: "LOGIN", token });
    };
}

export function logout(tokenKey = "token") {
    return async (dispatch, getState) => {
        localStorage.removeItem(tokenKey);
    };
}
