import React from 'react';
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
    return (
        <aside className="journal-sidebar px-3">
            <div>
                <div className="journal-sidebar-navbar d-flex justify-content-between mt-4">
                    <h3>
                        <i className="far fa-moon"></i>
                        <span> Sheila</span>
                    </h3>

                    <button className="btn text-white p-0 m-0">
                        Logout
                    </button>
                </div>

                <div className="journal-new-entry d-flex justify-content-center mt-5 w-100 align-items-center flex-column">
                    <i className="far fa-calendar-plus fa-5x"></i>
                    <p className="mt-2">New entry</p>
                </div>

            </div>

            <JournalEntries />
        </aside>
    );
};

export default Sidebar;