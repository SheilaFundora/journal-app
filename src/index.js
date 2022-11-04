import React from 'react';
import ReactDOM from 'react-dom/client';
import JournalApp from "./JournalApp";
import '../src/styles/colors.css'
import '../src/styles/auth.css'
import '../src/styles/links.css'
import '../src/styles/nothing-main.css'
import '../src/styles/journal.css'
import '../src/styles/buttons.css'
import '../src/styles/note.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <JournalApp />
);

