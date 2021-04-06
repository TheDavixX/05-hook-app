import React, { useReducer } from 'react';
import { shallow } from 'enzyme';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', ()=>{


    test('debe retornar el estado por defecto', () => {
       
        const state = todoReducer(demoTodos, {});

        expect( state ).toEqual( demoTodos );

    });

    test('debe agregar un todo', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Mas',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }
        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, newTodo] );

    });

    test('debe borrar un todo', () => {
       
    
        const action = {
            type: 'delete',
            payload: 1
        }
        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[1] ] );
    });

    test('debe cambiar el estado del todo', () => {
       
        const idTodo = 2;
        const action = {
            type: 'toggle',
            payload: idTodo
        }

        const state = todoReducer(demoTodos, action);

        expect( state.find(element => element.id == idTodo).done ).toBe( true );

    });

});