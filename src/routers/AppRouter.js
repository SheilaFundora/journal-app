import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import JournalPage from "../components/journal/JournalPage";
import {useSelector} from "react-redux";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
    const { uid } = useSelector( state => state.auth);

    //!!uid singifica q si es true
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/auth/*" element={ !!uid ? (<Navigate to = '/' /> ): (<AuthRouter /> )} />
                    <Route exact path="/" element={ !!uid ? <JournalPage /> :(<Navigate to = '/auth/login' /> ) } />
                </Routes>
            </div>
        </Router>


    );
};

export default AppRouter;