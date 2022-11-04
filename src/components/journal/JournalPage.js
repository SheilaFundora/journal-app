import React from 'react';
import Sidebar from "./Sidebar";

const JournalPage = () => {
    return (
        <div className="d-flex">
            <Sidebar />

            <main>
                <h1>Main Content</h1>
            </main>
        </div>
    );
};

export default JournalPage;