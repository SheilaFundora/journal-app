import React from 'react';
import ReactDOM from 'react-dom/client';
import ClientApp from "./ClientApp";

import '../src/style/styles.css'
import {Provider} from "react-redux";
import {store} from "./store/store";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ store }>
        <ClientApp />
    </Provider>
);

