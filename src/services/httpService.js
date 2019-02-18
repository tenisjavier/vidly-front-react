// @desc    make http service to be library agnostic
import axios from "axios";

axios.interceptors.response.use(null, error => {
    const expextedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expextedError) {
        console.log("Logging the error", error);
    }

    return Promise.reject(error);
});

function setJwt(jwt) {
    axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
};
