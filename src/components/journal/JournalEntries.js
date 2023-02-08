import React, {useEffect} from 'react';
import JournalEntry from "./JournalEntry";
import { startLoading} from "../../actions/note";
import {useDispatch, useSelector} from "react-redux";

const JournalEntries = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch( startLoading() );

    }, [ dispatch ])

    const { notes } = useSelector( state => state.note);

    console.log(notes);



    return (
        <div className="journal-entries mt-2">
            {
                notes.map(note => (
                    <JournalEntry key={note.uid} title={note.title} date={note.date} />
                ))
            }
        </div>
    );
};

export default JournalEntries;