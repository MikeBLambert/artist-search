import React from 'react';
import ArtistDetail from './ArtistDetail';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
jest.mock('../../services/artistApi', () => {
  return { getArtist: () => Promise.resolve({ artist: 'Nirvana', songs: ['Song1', 'Song2'] }) };
});

describe('ArtistDetail', () => {
  it('renders an ArtistDetail component', () => {
    const wrapper = shallow(<ArtistDetail location={{ pathname:'1234' }}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a songs component', () => {
    const wrapperWithRouter = shallow(
      <MemoryRouter>
        <ArtistDetail />
      </MemoryRouter>);
    expect(wrapperWithRouter.find('Songs')).toBeTruthy();
  });
});
