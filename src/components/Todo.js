import React, { useContext } from 'react'
import { DELETE_TODO } from "../actions"
import AppContext from '../contexts/AppContext'

const Todo = ({ event } = {}) => {
    const { dispatch } = useContext(AppContext)

    const id = event.id
    const deleteButton = () => {
        const result = window.confirm(`id(${id})を削除しますか？`)
        if (result) {
            dispatch({
                type: DELETE_TODO,
                id: id
            })
        }
    }

    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button className="btn btn-danger" onClick={deleteButton}>削除</button></td>
        </tr>
    )


}

export default Todo