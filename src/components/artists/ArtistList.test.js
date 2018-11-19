import React from 'react';
import ArtistList from './ArtistList';
import { shallow } from 'enzyme';

describe('ArtistList', () => {
  it('renders an ArtistList component', () => {
    const wrapper = shallow(<ArtistList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a paging component', () => {
    const wrapper = shallow(<ArtistList />);
    expect(wrapper.find('Paging')).toBeTruthy();
  });

  it('has a search component', () => {
    const wrapper = shallow(<ArtistList />);
    expect(wrapper.find('Search')).toHaveLength(1);
  });
});
