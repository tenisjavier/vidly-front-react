//@desc     Main Reducer that will change the state in redux store. Combines other reducers.
import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import genreReducer from "./genreReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    auth: authReducer
});

export default rootReducer;
