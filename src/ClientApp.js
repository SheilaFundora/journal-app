import React from 'react';
import {Navbar} from "./components/ui/Navbar";
import Table from "./components/Table";
import {store} from "./store/store";
import {Provider, useSelector} from "react-redux";
import AppRouter from "./routers/AppRouter";

const ClientApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    );
};

export default ClientApp;