import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import App from './App'
import { User } from './App'

const users_empty = {};
const AppComponent = shallow(<App user={users_empty}/>);

describe('<App />', () => {
    it('renders', () => {
        const tree = toJson(AppComponent);
        expect(tree).toMatchSnapshot(AppComponent);
    });

    it('displays a User component if active', () =>{
        AppComponent.setState({ 'active': true });
        expect(AppComponent.find(User).length).toBe(1);
    });

    it('Does not display the User component if inactive', () => {
        AppComponent.setState({ 'active': false });
        expect(AppComponent.find(User).length).toBe(0);
    });
});