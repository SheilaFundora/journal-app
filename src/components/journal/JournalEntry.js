import React from 'react';

const JournalEntry = () => {
    return (
        <div className="journal-entry mb-3 d-flex overflow-hidden">

            <div className="journal-entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: "center center",
                    backgroundImage: 'url(https://play-lh.googleusercontent.com/qvA9Ce0HEsea0Tq9R35as4ZCHAWzCAP3lo9GARrKVM-omH_zxp5DXpAsX90SlAIGx6Ft)'
                }}></div>

            <div className="journal-entry-body p-2">
                <p className="journal-entry-title m-0">
                    Un nuevo día
                </p>
                <p className="journal-entry-content mt-1 p-0 mb-0">
                    Reprehenderit id in duis consectetur fugiat.
                </p>
            </div>

            <div className="journal-entry-date-box d-flex align-items-center justify-content-center flex-column p-2">
                <span>Monday</span>
                <h5>28</h5>
            </div>

        </div>
    );
};

export default JournalEntry;