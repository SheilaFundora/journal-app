import React from 'react';
import {useDispatch} from "react-redux";
import {types} from "../types/types";

const TableItem = ( {id,title, description, date, ...toDos }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteToDp())
    }
    const handleUpdate = () => {
    }

    const deleteToDp = () =>({
        type: types.delete,
        payload: id
    })

    return (
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>{date}</td>
            <td>
                <button className='btn btn-secondary' onClick={handleUpdate}> Update </button>
            </td>
            <td><button className='btn btn-danger' onClick={handleDelete}> Delete </button></td>
        </tr>
    );
};

export default TableItem;