import React from 'react';
import '@testing-library/jest-dom';
import { useFetch } from '../../hooks/useFetch';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Pruebas con useFetch', ()=>{

    test('debe retornar los default values', () => {

        const { result } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );

        const { data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( error ).toBe(null);

    });

    test('debe de tener loading false, error false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://www.breakingbadapi.com/apid/quotes/1`) );

        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(false);
        expect( error ).toBe('Se ha recivido un error');
        
    });


});