import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function serviceLogin(email, password) {
    console.log("email", email);
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export async function serviceGetCurrentUser() {
    try {
        const result = await http.get(apiUrl + "/users/me");
        return result;
    } catch (ex) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export async function serviceCreateUser(user) {
    try {
        const result = await http.post(apiUrl + "/users", user);
        return result;
    } catch (ex) {
        return null;
    }
}

export default {
    serviceLogin,
    loginWithJwt,
    serviceGetCurrentUser,
    getJwt,
    serviceCreateUser
};
