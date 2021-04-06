import React from 'react';
import '@testing-library/jest-dom';
import { useForm } from '../../hooks/useForm';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Pruebas con useForm', ()=>{

    const initialForm = {
        name: 'David',
        email: 'davidestevez@gmail.com',
    };

    test('debe retornar un formulario por defecto', () => {

        const { result } = renderHook( () =>  useForm(initialForm) );
        const [ values, handleInputChange, reset ] = result.current;

        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        
    });

    test('debe cambiar un el campo name de David a Pepito', () => {
    
        const { result } = renderHook( () =>  useForm(initialForm) );
        const [ , handleInputChange] = result.current;
        
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Pepito'
                }
            });
         
        });

        const [values] = result.current;   
    
        expect( values ).toEqual( { ...initialForm, name: 'Pepito'} );
        
    });


    test('debe restablecer el datos iniciales del formutario', () => {

        const { result } = renderHook( () =>  useForm(initialForm) );
        const [, handleInputChange, reset] = result.current;
        
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Pepito'
                }
            });

            reset();
         
        });

        const [values] = result.current;        
        expect( values ).toEqual( initialForm );
        
    });



});