import React from 'react';
import NoteAppBar from "./NoteAppBar";
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {noteStartAddNew, startUploading} from "../../actions/note";
import Swal from "sweetalert2";
import {fileUpload} from "../../helpers/fileUpload";

const AddNote = () => {

    const [ formValues, handleInputChange ] = useForm({title: '', description: '', url: ''});
    const { title, description } = formValues;

    const { activeTypeNote } = useSelector( state => state.note);

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const dispatch = useDispatch();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        dispatch(startUploading(file))
    }


    const handleAddNote= (e) => {
        e.preventDefault();

        const date = new Date();
        const note = {title, description, date}

        dispatch(noteStartAddNew(note))

    }

    return (
        <div className="notes-main-content d-flex flex-column h-100">
            <NoteAppBar activeTypeNote={activeTypeNote} />

            <div className="notes-content d-flex flex-column h-100 p-4 mx-4">
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
                    className="notes-textarea h-25"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                ></textarea>

                <div>
                    <input
                        id="fileSelector"
                        type="file"
                        name="file"
                        style={{ display: 'none' }}
                        onChange={ handleFileChange }
                    />
                    <button id="loadFile"
                            className="btn mx- 3 mt-5 journal-add-img text-white border-2"
                            onClick={ handlePictureClick }
                            type="submit"> Add image
                    </button>
                    <button id="loadFile"
                            className="btn mx-3 mt-5 journal-add-img text-white border-2"
                            onClick={handleAddNote}
                            type="submit"> Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNote;