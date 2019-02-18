//@desc     Genre Reducer that will change the genre state in redux
const initState = {};

function genreReducer(state = initState, action) {
    if (action.type === "GET_GENRES") {
        return action.genres;
    }

    return state;
}

export default genreReducer;
