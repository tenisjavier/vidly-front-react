import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/genres";

export function serviceGetGenres() {
    const result = http.get(apiEndpoint);
    return result;
}
