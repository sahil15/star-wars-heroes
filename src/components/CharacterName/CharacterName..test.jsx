import React from 'react';
import { configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import CharacterName from "./CharacterName";
import CharacterDesc from "../CharacterDesc/CharacterDesc";

describe("<CharacterName/>",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=mount(<CharacterName/>);
    })

    it("should shows CharacterDesc on button click ",()=>{
        expect(wrapper.find(CharacterDesc).length>0).toBeFalsy();
        wrapper.find("button").simulate("click");
        expect(wrapper.find(CharacterDesc).length>0).toBeTruthy();
    });

    it("should hide the characterDesc on text chage",()=>{
        wrapper.find("button").simulate("click");
        expect(wrapper.find(CharacterDesc).length>0).toBeTruthy();
        wrapper.find("input[name='search']").simulate("change",{target:{value:"abc"}});
        expect(wrapper.find(CharacterDesc).length>0).toBeFalsy();
    });
});