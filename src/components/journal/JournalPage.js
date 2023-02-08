import React from 'react';
import Sidebar from "./Sidebar";
import NothingSelected from "./NothingSelected";
import {useSelector} from "react-redux";
import {Navigate, Route} from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import NotePage from "../notes/NotePage";

const JournalPage = () => {
    const { activeNote } = useSelector( state => state.note);

    return (
        <div className="d-flex">
            <Sidebar />

            <main className="w-100">
                { activeNote === 'add' ? <NotePage /> : <NothingSelected /> }

                {/*<NotePage />*/}
            </main>
        </div>
    );
};

export default JournalPage;