import React from 'react';
import { mount, shallow } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen'
import { UserContext } from '../../../components/09-useContext/UserContext';
import { act } from '@testing-library/react';
describe('Pruebas en <LoginScreen />', ()=>{

    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen /> 
        </UserContext.Provider>
    );

    
    test('debe mostrarse correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();
        

    });
    
    test('debe mostrarse correctamente', () => {
       
        wrapper.find('button').prop('onClick')();
        
        expect(setUser).toHaveBeenCalledWith({ id:1, name: 'David', email: 'davidestevez1000@gmail.com'});

    });
});