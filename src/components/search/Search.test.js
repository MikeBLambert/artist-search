import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('search component', () => {

  it('renders a search component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a label and input', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find('input').at(0)).toBeTruthy();
    expect(wrapper.find('label').at(0)).toBeTruthy();
  });
});
