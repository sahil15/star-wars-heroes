import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from './App';
import CharacterName from './components/CharacterName/CharacterName';

describe("<App/>", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount( < App / > );
    });


    it("should show the CharacterName", () => {
        expect(wrapper.find(CharacterName).length === 1).toBeTruthy();
    })
});