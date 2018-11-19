import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Song from './Song';
jest.mock('../../services/lyricsApi', () => {
  return { getLyrics: () => Promise.resolve({ lyrics: 'Lalalalala' }) };
});

describe('Song', () => {

  it('renders a search component', () => {
    const wrapper = shallow(<Song location={{ pathname: '/sldkfj' }}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('displays a SongDetail component', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Song />
      </MemoryRouter>
    );
    expect(wrapper.find('SongDetails')).toBeTruthy();
  });
});
