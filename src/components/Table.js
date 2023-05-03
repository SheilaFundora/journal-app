import React from 'react';
import {useSelector} from "react-redux";
import TableItem from "./TableItem";

const Table = () => {

    const { toDos } = useSelector( state => state.toDo);

    return (
        <div className='p-5 mt-3'>
            <table className="table text-center table-hover">
                <thead >
                <tr>
                    <th>To do list</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {
                        toDos.map(toDos => (
                            <TableItem key={toDos.id}  {...toDos} />
                        ))

                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;