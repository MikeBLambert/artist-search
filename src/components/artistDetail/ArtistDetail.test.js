import React from 'react';
import ArtistDetail from './ArtistDetail';
import { shallow } from 'enzyme';

describe('ArtistDetail', () => {
  it('renders an ArtistDetail component', () => {
    const wrapper = shallow(<ArtistDetail />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a songs component', () => {
    const wrapper = shallow(<ArtistDetail />);
    expect(wrapper.find('Songs')).toHaveLength(1);
  });

  it('is just messing a around', () => {
    const wrapper = shallow(<ArtistDetail />);
    expect(wrapper).toContain('lsdjf');
  });
});
