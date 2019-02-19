import http from "./httpService";

const apiEndpoint = "/genres";

export function serviceGetGenres() {
    const result = http.get(apiEndpoint);
    return result;
}
