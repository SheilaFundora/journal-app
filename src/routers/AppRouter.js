import React from 'react';
import ToDoPages from "../components/ToDoPages";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import AddToDo from "../components/AddToDo";

const AppRouter = () => {
    return (

        <Router>
            <div>
                <Routes>
                    <Route path="/add" element={ (<AddToDo /> )} />
                    <Route exact path="/*"  element={ (<ToDoPages /> )}/>
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;