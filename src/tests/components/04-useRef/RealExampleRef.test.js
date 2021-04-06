import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas con <RealExampleRef />', ()=>{

    const wrapper = shallow(<RealExampleRef />);

    test('debe mostrar correctamente', () => {
       
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
    });

    test('debe mostrarse <MultipleCustomHooks /> correctamente', () => {

        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
    });


});