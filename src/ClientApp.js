import React from 'react';
import {Navbar} from "./components/ui/Navbar";
import Table from "./components/Table";

const ClientApp = () => {
    return (
        <div>
            <Navbar/>


            <button className='float-end btn me-5 btn-secondary mt-5'>Add</button>

            <Table />
        </div>
    );
};

export default ClientApp;