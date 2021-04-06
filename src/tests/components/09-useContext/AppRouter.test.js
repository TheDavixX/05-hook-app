import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <LoginScreen />', ()=>{

    const user = {
        name: 'David',
        email: 'davidestevez1000@gmail.com'
    };

    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter /> 
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();
        
    });
    

});