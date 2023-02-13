import React, {useEffect, useRef} from 'react';
import NoteAppBar from "./NoteAppBar";
import { useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";

const NotePage = () => {
    const { activeNote, activeTypeNote } = useSelector( state => state.note);
    const [ formValues, handleInputChange, reset ] = useForm(activeNote);
    const { title, description, url } = formValues;

    console.log(formValues)

    const activeId = useRef( activeNote.id );


    useEffect(() => {

        if ( activeNote.id !== activeId.current ) { //comparo el valor q tiene la nota activa con el q
            // tengo en el current q es el inicial q no cambia hasta q lo digamos, si cambiaron llamamos al
            // reser y establecemos esta ultima como la currrent. Es como q guardamos el valor al q apuntamos en
            // el useRef y se guardara asi cambie , nos permite comprara y como unico se cambia es manual con el c8urrent
            reset( activeNote );
            activeId.current = activeNote.id
        }

    }, [activeNote, reset])

    return (
        <div className="notes-main-content d-flex flex-column h-100">
            <NoteAppBar activeTypeNote={activeTypeNote} date={activeNote.date.slice(0, 10)} formvalues={formValues}/>

            <div className="notes-content d-flex flex-column h-100 p-4 mx-4">

                <h1>{url}</h1>

                <div>
                    <input
                        type="text"
                        placeholder="Some awesome title"
                        className="notes-title-input "
                        autoComplete="off"
                        name='title'
                        value={title}
                        onChange={ handleInputChange}
                    />

                    <br />
                    <textarea
                        placeholder="What happened today"
                        className="notes-textarea h-50"
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                    ></textarea>
{/*condicionalemnte si activeNote.url, si existe lo muestro*/}
                    <div className='d-flex justify-content-between'>
                        <div className="note-image mt-2">
                            <img
                                src={`../../../../../../../../${url}`}
                                alt="imagen"
                            />
                        </div>


                        {/*<div className="note-image mt-3 mx-5">*/}
                        {/*    <input type="file"*/}
                        {/*           name="url"*/}
                        {/*           id="inputFile"*/}
                        {/*           value={url}*/}
                        {/*           onChange={handleInputChange}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotePage;