import React from 'react';

const Table = () => {
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
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>Doe</td>
                    <td><button className='btn btn-secondary'> Update </button></td>
                    <td><button className='btn btn-danger'> Delete </button></td>
                </tr> <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>Doe</td>
                    <td><button className='btn btn-secondary'> Update </button></td>
                    <td><button className='btn btn-danger'> Delete </button></td>
                </tr> <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>Doe</td>
                    <td><button className='btn btn-secondary'> Update </button></td>
                    <td><button className='btn btn-danger'> Delete </button></td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Table;