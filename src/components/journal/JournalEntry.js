import React from 'react';


const JournalEntry = ({title, date}) => {
    return (
        <div className="journal-entry mb-3 d-flex overflow-hidden">

            <div className="journal-entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: "center center",
                    backgroundImage: 'url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)'                }}></div>

            <div className="journal-entry-body p-2">
                <p className="journal-entry-title m-0">
                    {title}
                </p>
                <p className="journal-entry-content mt-1 p-0 mb-0">
                    Reprehenderit id in duis consectetur fugiat.
                </p>
            </div>

            <div className="journal-entry-date-box d-flex align-items-center justify-content-center flex-column p-2">
                <span>{date}</span>
            </div>

        </div>
    );
};

export default JournalEntry;