import React, {useEffect} from 'react';
import {Navbar} from "./ui/Navbar";
import Table from "./Table";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {startLoading} from "../actions/toDo";

const ToDoPages = () => {
    const dispatch = useDispatch();

    dispatch( startLoading() );

    return (
        <div>
            <Navbar/>

            <Link className='float-end btn me-5 btn-secondary mt-5' to='/add'>Add</Link>

            <Table />
        </div>
    );
};

export default ToDoPages;