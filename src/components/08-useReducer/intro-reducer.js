
const initialState = [{
    id: 1,
    todo: 'Comprar leche',
    done: false
}];


const todoReducer  = ( state = initialState, action ) => {

    if( action?.type === 'agregar' ){
        return [...state, action.payload];
    }

    return state;
}

let todoList = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const addTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todoList = todoReducer( todoList, addTodoAction );


console.log(todoList);