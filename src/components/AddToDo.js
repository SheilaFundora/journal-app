import React from 'react';
import {Navbar} from "./ui/Navbar";
import {useForm} from "../hooks/useForm";
import {useDispatch} from "react-redux";
import {types} from "../types/types";

const AddToDo = () => {

    const [ formValues, handleInputChange ] = useForm({title: '', description: ''});
    const { title, description } = formValues;

    const dispatch = useDispatch();

    const handleAddToDo = () => {
        const toDos = [title, description]
        dispatch(handleAdd(toDos));
    }

    const handleAdd = (toDos) =>({
        type: types.add,
        payload: toDos
    })

    return (
        <div>
            <Navbar/>

            <h1 className='mt-5 text-center'>Add to list</h1>

            <div className="p-5 flex-column d-flex justify-content-center align-items-center">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes-title-input input-group w-50 p-2 inp-style"
                    name='title'
                    value={title}
                    onChange={ handleInputChange}
                />

                <br />

                <textarea
                    placeholder="What happened today"
                    className="notes-textarea w-50 inp-style texttarea"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                ></textarea>

                <button className='btn mt-4 w-25 btn-dark'  onClick={handleAddToDo} type='submit'>Send</button>

            </div>

        </div>
    );
};

export default AddToDo;