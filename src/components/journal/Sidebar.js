import React from 'react';
import JournalEntries from "./JournalEntries";
import {useDispatch, useSelector} from "react-redux";
import {startLogout} from "../../actions/auth";
import {types} from "../../types/types";

const Sidebar = () => {

    const { name } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    const handleAddNote = () => {
        dispatch(handleSetAcionAdd())
    }

    const handleSetAcionAdd = () =>({
        type: types.noteTypeAction,
        payload: "add"
    })

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

                <div className="journal-new-entry d-flex justify-content-center my-4 w-100 align-items-center flex-column">
                    <button className="bg-transparent text-white border-0"
                            onClick={ handleAddNote }
                    >
                        <i className="far fa-calendar-plus fa-4x"></i>
                    </button>
                </div>

            </div>

            <JournalEntries />
        </aside>
    );
};

export default Sidebar;