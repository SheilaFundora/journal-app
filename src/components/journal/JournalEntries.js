import React from 'react';
import JournalEntry from "./JournalEntry";
import { useSelector} from "react-redux";


const JournalEntries = () => {
    const { notes } = useSelector( state => state.note);

    console.log(notes.length)

    return (
        <div className="journal-entries ">
            {
                notes.map(note => (
                    <JournalEntry key={note.id}  {...note} />
                ))
            }
        </div>
    );
};

export default JournalEntries;