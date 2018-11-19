import React from 'react';
import { shallow } from 'enzyme';
import SongDetails from './SongDetails';

describe('SongDetails component', () => {
  it('renders a SongDetails component', () => {
    const wrapper = shallow(<SongDetails artist='The Beatles' song='Hey Jude' lyrics='Lalalalalala'/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('shows has an artist, song, and lyrics rendered', () => {
    const wrapper = shallow(<SongDetails artist='The Beatles' song='Hey Jude' lyrics='Lalalalalala'/>);
    expect(wrapper.html()).toContain('The Beatles');
  });
});
