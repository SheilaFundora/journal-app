import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import JournalPage from "../components/journal/JournalPage";
import {useDispatch, useSelector} from "react-redux";
import AuthRouter from "./AuthRouter";
import {startChecking} from "../actions/auth";

const AppRouter = () => {
    const { uid, checking } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch])

    if ( !checking ) {
        return (<h5>Espere...</h5>);
    }

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