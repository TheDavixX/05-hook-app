import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas con <HookApp />', ()=>{
    test('debe mostrar <HookApp /> correctamente', () => {
        const wrapper = shallow(<HookApp />);

        expect( wrapper ).toMatchSnapshot();
    });


});