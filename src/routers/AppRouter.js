import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AuthRouter from "./AuthRouter";
import JournalPage from "../components/journal/JournalPage";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/auth/*" element={ <AuthRouter /> } />
                    <Route exact path="/" element={ <JournalPage /> } />
                </Routes>
            </div>
        </Router>


    );
};

export default AppRouter;