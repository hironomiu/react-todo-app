import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Todo from './Todo'

const Todos = () => {
    // App.js `<AppContext.Provider value={{state}}>` で設定され分割代入で受け取り
    const { state } = useContext(AppContext)
    return (
        <>
            <div className="mb-3">
                <h4>ToDo一覧</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>タイトル</th>
                            <th>内容</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* propを用いて状態を配下componentに渡す`key={index} event={event}` */}
                        {state.map((event, index) => (<Todo key={index} event={event} />))}
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default Todos