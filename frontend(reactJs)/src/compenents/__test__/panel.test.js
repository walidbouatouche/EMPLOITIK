import React from 'react'
import Panel from '../panel'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
Enzyme.configure({ Adapter: new Adapter() })


beforeEach()
it(' panel commpent render correctly', () => {
    const wrapper = shallow(<Panel />)
    expect(toJson(wrapper)).toMatchSnapshot();
});
