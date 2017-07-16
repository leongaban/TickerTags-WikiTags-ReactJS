import React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Trends from './Trends'
import Chart from '../entity/Chart'

const body = { subject: { id: 0 } };
const TrendComponent = shallow(<Trends body={body}/>);

describe('<Trends />', () => {
    it('renders', () => {
        const tree = toJson(TrendComponent);
        expect(tree).toMatchSnapshot(TrendComponent);
    });

    it('contains the Chart component', () => {
        expect(TrendComponent.find(Chart).length).toBe(1);
    });
});