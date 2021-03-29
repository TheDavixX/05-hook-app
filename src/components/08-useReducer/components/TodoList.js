import React from 'react'
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todoList, handleDelete, handleToggle}) => {

    return (
        
        <ul className="list-group list-group-flush">
            {
                todoList.map( (todo, indice) => (
                   
                    <TodoListItem 
                        key={ todo.id }
                        todo={ todo } 
                        indice={ indice }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle } />
                    
                ))
            }
        </ul>
    )
}

TodoList.protoType = {
    todoList: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
}