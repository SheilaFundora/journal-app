import React from 'react';
import JournalEntries from "./JournalEntries";
import {useDispatch, useSelector} from "react-redux";
import {startLogout} from "../../actions/auth";

const Sidebar = () => {
    const { name } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }


    return (
        <aside className="journal-sidebar px-4">
            <div>
                <div className="journal-sidebar-navbar d-flex justify-content-between mt-4">
                    <h3 className="p-0 m-0">
                        <i className="far fa-moon"></i>
                        <span> {name} </span>
                    </h3>

                    <button className="btn text-white p-0 m-0" onClick={ handleLogout }>
                        Logout
                    </button>
                </div>

                <div className="journal-new-entry d-flex justify-content-center mt-4 w-100 align-items-center flex-column">
                    <i className="far fa-calendar-plus fa-4x"></i>
                    <p className="mt-2">New entry</p>
                </div>

            </div>

            <JournalEntries />
        </aside>
    );
};

export default Sidebar;