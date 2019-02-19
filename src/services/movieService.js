import http from "./httpService";

const apiEndpoint = "/movies";

export function serviceGetMovies() {
    const result = http.get(apiEndpoint);
    return result;
}

export function serviceGetMoviesByGenre(genreId) {
    const result = http.get(apiEndpoint + "/genre/" + genreId);
    return result;
}

export function serviceSaveMovie(movie) {
    http.post(apiEndpoint, movie);
}

export function serviceDeleteMovie(movie) {
    const result = http.delete(apiEndpoint + "/" + movie._id);
    return result;
}
