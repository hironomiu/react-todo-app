import React, { useContext, useState } from 'react'
import { CREATE_TODO, DELETE_ALL_TODOS } from '../actions'
import AppContext from '../contexts/AppContext'

const TodoForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addTodo = (e) => {
        e.preventDefault()
        dispatch({
            type: CREATE_TODO,
            title,
            body
        })
        setTitle('')
        setBody('')
    }

    const deleteAllTodo = (e) => {
        e.preventDefault()
        const result = window.confirm('削除しても良いですか？')
        if (result) {
            dispatch({
                type: DELETE_ALL_TODOS
            })
        }
    }

    const unCreatable = title === '' || body === ''
    const noTodo = state.length === 0
    return (
        <>
            <div className="mb-3">
                <h4>フォーム</h4>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="formEventTitle" style={{ fontWeight: "bold" }}>タイトル</label>
                        <input type="text" className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formEventTitle" style={{ fontWeight: "bold" }}>内容</label>
                        <textarea type="text" className="form-control" id="formEventTitle" value={body} onChange={e => setBody(e.target.value)} />
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-primary" onClick={addTodo} disabled={unCreatable}>ToDo作成</button>
                        <button className="btn btn-danger" onClick={deleteAllTodo} disabled={noTodo}>全ToDo削除</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default TodoForm