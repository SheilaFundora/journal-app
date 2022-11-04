import React from 'react';
import NoteAppBar from "./NoteAppBar";

const NotePage = () => {
    return (
        <div className="notes-main-content d-flex flex-column h-100">
            <NoteAppBar />

            <div className="notes-content d-flex flex-column h-100 p-4">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes-title-input "
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes-textarea"
                ></textarea>

                <div className="note-image">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>


            </div>
        </div>
    );
};

export default NotePage;