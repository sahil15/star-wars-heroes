import React from 'react';
import wait from "waait";
import { configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import capitalize from "capitalize";
import { act } from 'react-dom/test-utils';
import {
     CardHeader, 
    ListGroupItem
  } from 'reactstrap';
import axios from 'axios';

jest.mock('axios');
configure({ adapter: new Adapter() });
import CharacterDesc from "./CharacterDesc";

const waitForComponentToPaint = async (wrapper) => {
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      wrapper.update();
    });
 };

describe("<CharacterDesc/>",()=>{
    let wrapper;
    const requestName="abc";
    const gender="thisisGender";
    const birthYear="brithYearIsThis";
    const height="height";
    const mass="20000k";
    const hairColor="bloodRed";

    const resultsRef= {
        name:requestName,
        gender:gender,
        birth_year:birthYear,
        height:height,
        mass:mass,
        hair_color:hairColor
    };

    const tableRef={
        Gender:gender,
        "Birth Year":birthYear,
        "Height":height,
        "Mass":mass,
        "Color":hairColor
    };


    beforeEach(()=>{
        axios.get.mockImplementation(() => Promise.resolve({
            data: {
                results:[
                    resultsRef
                ]
            }
        }));
        wrapper=mount(<CharacterDesc characterName={requestName}/>)
        waitForComponentToPaint(wrapper);
        
    });

    it("should show the details of the hero when the data successfully returns ", ()=>{
        wrapper.update();
        expect(wrapper.find(CardHeader).text()).toBe(requestName);
        
        wrapper.find(ListGroupItem).forEach(elemRef=>{
            const nameRef=elemRef.find("label").text();
            const valueRef=tableRef[nameRef];

            expect(valueRef).not.toBeUndefined();
            expect(elemRef.find("span").text()).toBe(capitalize(valueRef));
        });

    });
});

describe("<CharacterDesc/> without results",()=>{
    let wrapper;
    const requestName="abc";
    const errorMessage="Loading...";
    beforeEach(()=>{
        axios.get.mockImplementation(() => Promise.resolve({
            data: {
                results:[]
            }
        }));
        wrapper=mount(<CharacterDesc characterName={requestName}/>);
        waitForComponentToPaint(wrapper);
        
    });

    it("should show that there is no error when the api retuns empty results", ()=>{
        wrapper.update();
        expect(wrapper.find(CardHeader).text()).toBe(errorMessage);
        expect(wrapper.find(ListGroupItem).length==0).toBeTruthy();
    });
});



describe("<CharacterDesc/> api failure",()=>{
    let wrapper;
    const requestName="abc";
    const errorMessage="Failed to Retrieve Data";
    beforeEach(()=>{
        axios.get.mockImplementation(() => Promise.reject({
            data: {
                results:[]
            }
        }));
        wrapper=mount(<CharacterDesc characterName={requestName}/>);
        waitForComponentToPaint(wrapper);
    });

    it("should show that there is no error when the api retuns empty results",()=>{
        wrapper.update();
        expect(wrapper.find(CardHeader).text()).toBe(errorMessage);
        expect(wrapper.find(ListGroupItem).length==0).toBeTruthy();
    });
})
