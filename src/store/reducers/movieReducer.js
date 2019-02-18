//@desc     Movie Reducer that will change the movies state in redux
const initState = {};

function movieReducer(state = initState, action) {
    if (action.type === "GET_MOVIES") {
        return action.movies;
    }

    if (action.type === "GET_MOVIES_BY_GENRE") {
        return action.moviesByGenre;
    }

    if (action.type === "ORDER_MOVIES") {
        return action.sortedMovies;
    }

    return state;
}

export default movieReducer;
