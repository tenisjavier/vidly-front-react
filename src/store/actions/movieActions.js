// @desc    dispatch actions of movies also with async calls
import _ from "lodash";
import {
    serviceGetMovies,
    serviceGetMoviesByGenre,
    serviceSaveMovie,
    serviceDeleteMovie
} from "../../services/movieService";

// @desc    Async Call to get all Movies
export function getMovies() {
    return async (dispatch, getState) => {
        const { data: movies } = await serviceGetMovies();
        dispatch({ type: "GET_MOVIES", movies });
    };
}

// @desc    Async Call to get all Movies by a specific Genre
export function getMoviesByGenre(genreId) {
    return async (dispatch, getState) => {
        const { data: moviesByGenre } = await serviceGetMoviesByGenre(genreId);
        dispatch({ type: "GET_MOVIES_BY_GENRE", moviesByGenre });
    };
}

// @desc    Order Movies by a Specific Column
export function orderMovies(column) {
    return (dispatch, getState) => {
        const { movies } = getState();
        const sortedMovies = _.orderBy(movies, column.key, column.order);
        dispatch({ type: "ORDER_MOVIES", sortedMovies });
    };
}

// @desc    Save Movie in the DB
export function saveMovie(movie) {
    return async (dispatch, getState) => {
        await serviceSaveMovie(movie);
        const { data: movies } = await serviceGetMovies();
        dispatch({ type: "GET_MOVIES", movies });
    };
}

// @desc    Delete Movie in the DB
export function deleteMovie(movie) {
    return async (dispatch, getState) => {
        await serviceDeleteMovie(movie);
        const { data: movies } = await serviceGetMovies();
        dispatch({ type: "GET_MOVIES", movies });
    };
}
