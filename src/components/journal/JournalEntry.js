import React from 'react';
import {types} from "../../types/types";
import {useDispatch} from "react-redux";


const JournalEntry = ({title, description, ...notes}) => {
    const dispatch = useDispatch();

    const handleAciveEvent = () => {
        const noteSelected = {title, description, ...notes}

        dispatch(handlenoteSetActive(noteSelected))

        dispatch(handleSetAcionAdd())

    }

    const handlenoteSetActive = (noteSelected) =>({
        type: types.noteSetActive,
        payload: noteSelected
    })

    const handleSetAcionAdd = () =>({
        type: types.noteTypeAction,
        payload: "select"
    })

    return (
        <div className="journal-entry mb-3 d-flex overflow-hidden" onClick={handleAciveEvent}>

            <div className="journal-entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: "center center",
                    backgroundImage: 'url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)'                }}></div>

            <div className="journal-entry-body p-2">
                <p className="journal-entry-title m-0">
                    { title.length < 18 ? title.slice(0,18) : (title.slice(0,18) + "...")}
                </p>
                <p className="journal-entry-content mt-1 p-0 mb-0">
                    { description.length < 30 ? description.slice(0,30) : (description.slice(0,30) + "...")}
                </p>
            </div>

        </div>
    );
};

export default JournalEntry;