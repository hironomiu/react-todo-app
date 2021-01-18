import {
    CREATE_TODO,
    DELETE_TODO,
    DELETE_ALL_TODOS
} from '../actions'

const events = (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO:
            const event = { title: action.title, body: action.body }
            const length = state.length
            let id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id: id, ...event }]

        case DELETE_TODO:
            return state.filter(event => event.id !== action.id)

        case DELETE_ALL_TODOS:
            return []

        default:
            return state
    }

}

export default events