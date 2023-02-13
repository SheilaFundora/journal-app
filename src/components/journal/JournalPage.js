import React from 'react';
import Sidebar from "./Sidebar";
import NothingSelected from "./NothingSelected";
import {useSelector} from "react-redux";
import AddNote from "../notes/AddNote";
import NotePage from "../notes/NotePage";

const JournalPage = () => {
    const { activeNote, activeTypeNote } = useSelector( state => state.note);

    return (
        <div className="d-flex">
            <Sidebar />

            <main className="w-100">
                { ( !activeTypeNote  &&  !activeNote  ) && <NothingSelected /> }
                { activeTypeNote === 'add' && <AddNote /> }
                { ( activeNote && activeTypeNote === 'select') && <NotePage /> }
            </main>
        </div>
    );
};

export default JournalPage;