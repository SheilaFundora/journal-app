import {fetchConToken} from "../helpers/fetch";
import {types} from "../types/types";

export const startLoading = () => {
    return async(dispatch) => {

        try {
            const resp = await fetchConToken( 'notes' );
            const body = await resp.json();

            const note = body.note;

            dispatch(noteStartLoading(note));

        } catch (error) {
            console.log(error)
        }

    }
}

const noteStartLoading = (note) => ({
    type: types.noteLoaded,
    payload: note
})