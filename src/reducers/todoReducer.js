export default function reducer(state = {
    todos: []
}, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            let todoWithId = { ...action.payload, id: Date.now() };
            return { ...state, todos: state.todos.concat(todoWithId) };

        }
        case 'DELETE_TODO': {

            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload.id) };
        }

        default:
            return state;
    }
}