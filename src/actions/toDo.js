import {types} from "../types/types";


export const startLoading = () => {
    return async(dispatch) => {

        const toDos = [
            {id: '1',title:'123', description: 'defrg', date: '23/02/2009'},
            {id: '2',title:'123', description: 'defrg', date: '23/02/2009'},
            {id: '3',title:'123', description: 'defrg', date: '23/02/2009'},
            {id: '4',title:'123', description: 'defrg', date: '23/02/2009'}
        ]

        dispatch(toDostartLoading(toDos));

    }
}

const toDostartLoading = (toDo) => ({
    type: types.load,
    payload: toDo
})