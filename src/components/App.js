import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'
import TodoForm from './TodoForm';
import Todos from './Todos'

const App = () => {
  // 初期にlocalStorageにデータが存在すれば設定
  const localState = localStorage.getItem('todos')
  const initialState = localState ? JSON.parse(localState) : []
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {/* Bootstrap設定 */}
      <div className="container">

        <div className="p-3 mb-3 border-bottom">
          <h3 className="my-0 mr-md-auto">ToDoリスト</h3>
        </div>

        {/* stateとdispatchはpropで渡す */}
        <TodoForm />
        <Todos />

        <footer className="pt-4 my-md-5 pt-md-5 border-top" style={{ backgroundColor: "silver" }}>© 2021 TodoApp</footer>
      </div>
    </ AppContext.Provider>
  )
}

export default App;
