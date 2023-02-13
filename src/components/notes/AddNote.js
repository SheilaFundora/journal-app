import React from 'react';
import NoteAppBar from "./NoteAppBar";
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {noteStartAddNew} from "../../actions/note";

const AddNote = () => {

    const [ formValues, handleInputChange ] = useForm({title: '', description: '', url: ''});
    const { title, description, url } = formValues;

    const { activeTypeNote } = useSelector( state => state.note);


    const dispatch = useDispatch();

    const handleAddNote= (e) => {
        e.preventDefault();
        const date = new Date();
        const note = {title, description, url, date}

        dispatch(noteStartAddNew(note))

    }

    return (
        <div className="notes-main-content d-flex flex-column h-100">
            <NoteAppBar activeTypeNote={activeTypeNote} />

            <div className="notes-content d-flex flex-column h-100 p-4 mx-4">
                <form onSubmit={handleAddNote}>
                    <input
                        type="text"
                        placeholder="Some awesome title"
                        className="notes-title-input "
                        name='title'
                        value={title}
                        onChange={ handleInputChange}
                    />

                    <br />
                    <textarea
                        placeholder="What happened today"
                        className="notes-textarea h-100"
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                    ></textarea>

                    <div className="note-image mt-3">
                        <input type="file"
                               name="url"
                               id="inputFile"
                               value={url}
                               onChange={handleInputChange}
                        />
                    </div>

                    <button id="loadFile"  className="btn mt-5 journal-add-img text-white border-2" type="submit" > Save </button>
                </form>
            </div>
        </div>
    );
};

export default AddNote;