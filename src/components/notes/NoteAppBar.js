import React from 'react';
import {useDispatch} from "react-redux";
import {noteStartDelete, noteStartUpdate, startUploading} from "../../actions/note";

const NoteAppBar = ({ date, activeTypeNote, formvalues}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(noteStartDelete());
    }

    const handleUpdateNote = () => {
        dispatch(noteStartUpdate(formvalues))
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        dispatch(startUploading(file))
    }

    return (
    <div className="note-appbar align-items-center text-white d-flex justify-content-between py-2 ps-4 pe-5">
            <span className='py-2'>{ activeTypeNote === 'add' ? "Add a new note" : date}</span>

            <div>
                <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{ display: 'none' }}
                    onChange={ handleFileChange }
                />
                <span>
                    { activeTypeNote === 'select' ?
                        <button className="note-nav-buttons  mx-1" onClick={ handlePictureClick }>Update Img</button> : ''}
                </span>
                <span>
                    { activeTypeNote === 'select' ? <button className="note-nav-buttons mx-1" onClick={handleUpdateNote}>Update</button> : ''}
                </span>
                <span>
                    { activeTypeNote === 'select' ? <button className="note-nav-buttons mx-1" onClick={handleDelete}>Delete</button> : ''}
                </span>
            </div>

        </div>
    );
};

export default NoteAppBar;