import React from 'react';
import '@testing-library/jest-dom';
import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Pruebas con useCounter', ()=>{

    test('debe retornar los default values', () => {

        const { result } = renderHook( () =>  useCounter() );
        const { 
            counter,
            increment,
            decrement,
            reset, 
        } = result.current;

        expect( counter ).toBe( 10 );
        expect( typeof increment ).toBe( 'function' );
        expect( typeof decrement ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        
    });

    test('debe retornar el counter en 100', () => {

        const { result } = renderHook( () =>  useCounter(100) );
        const { counter } = result.current;

       
        expect( counter ).toBe( 100 );
        
    });

    test('debe incrementar el counter en 1', () => {

        const { result } = renderHook( () =>  useCounter(100) );
        const { increment } = result.current;

        act( () => {
            
            increment();

        });

        const { counter } = result.current;
        expect( counter ).toBe( 101 );
        
    });

    test('debe decementar el counter en 1', () => {

        const { result } = renderHook( () =>  useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            
            decrement();

        });

        const { counter } = result.current;
        expect( counter ).toBe( 99 );
        
    });

    test('debe reset establecer el valor por defecto', () => {

        const { result } = renderHook( () =>  useCounter(100) );
        const { reset, increment } = result.current;

        act( () => {

            increment(); 
            reset();

        });

        const { counter } = result.current;
        expect( counter ).toBe( 100 );
        
    });


});