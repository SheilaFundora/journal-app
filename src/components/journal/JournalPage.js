import React from 'react';
import Sidebar from "./Sidebar";
//import NothingSelected from "./NothingSelected";
import NotePage from "../notes/NotePage";

const JournalPage = () => {
    return (
        <div className="d-flex">
            <Sidebar />

            <main className="w-100">
{/*
                <NothingSelected />
*/}
                <NotePage />
            </main>
        </div>
    );
};

export default JournalPage;