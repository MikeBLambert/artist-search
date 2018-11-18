import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';
import { MemoryRouter } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

describe('Artist component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Artist id='9876'/>);
  });

  it('renders an episode', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays the artist\'s name', () => {
    const wrapperWithoutRouter = shallow(
      <MemoryRouter>
        <Artist id='666' name='Nirvana' />
      </MemoryRouter>
    );
    expect(wrapperWithoutRouter.html()).toContain('Nirvana');
  });

  it('links to an artist detail', () => {
    expect(wrapper.find('Link').props().to).toEqual(ROUTES.ARTIST.linkPath('9876'));
  });
});
