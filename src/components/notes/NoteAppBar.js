import React from 'react';

const NoteAppBar = () => {
    return (
        <div className="note-appbar align-items-center text-white d-flex justify-content-between py-2 px-4">
            <span>28 de agosto 2020</span>

            <div>
                <button className="note-nav-buttons">
                    Picture
                </button>

                <button className="note-nav-buttons ms-3">
                    Save
                </button>
            </div>
        </div>
    );
};

export default NoteAppBar;