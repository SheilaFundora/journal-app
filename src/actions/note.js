import {fetchConToken} from "../helpers/fetch";
import {types} from "../types/types";
import Swal from "sweetalert2";

export const startLoading = () => {
    return async(dispatch) => {

        try {
            const resp = await fetchConToken( 'notes' );
            const body = await resp.json();

            console.log(body)

            if ( body.ok ) {
                const note = body.note;
                dispatch(noteStartLoading(note));

            } else {
                Swal.fire('Error', body.sms, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}

export const noteStartAddNew = ( note ) => {
    return async( dispatch, getState ) => {

        const {uid, name} = getState().auth;

        try{
            const resp = await fetchConToken('notes', note, "POST");
            const body = await resp.json();

            console.log(body);
            if( body.ok ){
                note.id = body.saveNote.id;
                note.user = {
                    _id: uid ,
                    name: name
                }

                dispatch(noteAdd(note));
                Swal.fire('Success', 'The note has been added successfully', 'success')

                dispatch(cleanActiveNote())

                dispatch( startLoading() );

            } else {
                Swal.fire('Error', body.sms, 'error')
            }
        }catch (error){
            console.log(error);
        }

    }
}

export const noteStartDelete = () => {
    return async ( dispatch, getState ) => {

        const { id } = getState().note.activeNote;
        try {
            const resp = await fetchConToken(`notes/${ id }`, {}, 'DELETE' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( noteDeleted() );
                Swal.fire('Success', body.sms, 'success');

                dispatch( startLoading() );

            } else {
                Swal.fire('Error', body.sms, 'error');
            }

        } catch (error) {
            console.log(error)
        }

    }
}

export const noteStartUpdate = (note) => {
    return async ( dispatch, getState ) => {

        console.log(note)

        const { id } = getState().note.activeNote;
        try {
            const resp = await fetchConToken(`notes/${ id }`, note, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( noteUpdate() );
                Swal.fire('Success', body.sms, 'success');

                dispatch(cleanActiveNote())

                dispatch( startLoading() );

            } else {
                Swal.fire('Error', body.sms, 'error');
            }

        } catch (error) {
            console.log(error)
        }

    }
}

const noteDeleted = () => ({ type: types.noteDeleted });

const noteUpdate = (note) => ({
    type: types.noteUpdated,
    payload: note
});

const noteAdd = (note) => ({
    type: types.noteAddNew,
    payload: note
});

const noteStartLoading = (note) => ({
    type: types.noteLoaded,
    payload: note
})

const cleanActiveNote = () => ({ type: types.cleanActiveNote })
