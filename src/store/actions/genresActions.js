// @desc    dispatch actions of genres also with async calls
import { serviceGetGenres } from "../../services/genreService";

export function getGenres() {
    return async (dispatch, getState) => {
        const { data: genres } = await serviceGetGenres();
        dispatch({ type: "GET_GENRES", genres });
    };
}
