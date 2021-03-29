import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css'
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     donde: false,
    // }];

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todoList, dispatch ] = useReducer(todoReducer, [], init);  

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todoList ));
    }, [todoList]);

    const handleDelete = ( todoId ) => {
     
        const action = {
            type: 'delete',
            payload: todoId,
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) => {

        console.log('jola')
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });
    }

    return (
        <div>
            <h1>TodoApp ( { todoList.length } ) </h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    { /*TodoList, todoList (required), handleDelete, handleToggle */ }

                    <TodoList 
                        todoList={ todoList } 
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle } />

                </div>
                
                <div className="col-5">

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                        
                    />

                </div>

            </div>

        </div>
    )
}
