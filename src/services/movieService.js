import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

export function serviceGetMovies() {
    const result = http.get(apiEndpoint);
    return result;
}

export function serviceGetMoviesByGenre(genreId) {
    const result = http.get(apiEndpoint + "/genre/" + genreId);
    return result;
}

export function serviceSaveMovie(movie) {
    // if (movie._id) {
    //     const body = { ...movie };
    //     delete body._id;
    //     http.put(movieUrl(movie._id), body);
    // }
    http.post(apiEndpoint, movie);
}

export function serviceDeleteMovie(movie) {
    const result = http.delete(apiEndpoint + "/" + movie._id);
    return result;
}
