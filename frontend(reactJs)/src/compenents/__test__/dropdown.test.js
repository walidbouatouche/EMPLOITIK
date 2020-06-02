import React from 'react'
import Dropdown from '../dropdown'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
Enzyme.configure({ Adapter: new Adapter() })


beforeEach()
it(' Button commpent render correctly', () => {
    const wrapper = shallow(<Dropdown />)
    expect(toJson(wrapper)).toMatchSnapshot();
});
