import React from 'react';
import Songs from './Songs';
import { shallow } from 'enzyme';

describe('Songs component', () => {

  it('renders a Songs component', () => {
    const nirvanaSongs = [
      { id: 1, name: 'Smells Like Teen Spirit' },
      { id: 2, name: 'Come As You Are' },
      { id: 3, name: 'Lithium' }
    ];
    const wrapper = shallow(<Songs songs={nirvanaSongs}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('displays an artist\'s name and works', () => {
    const nirvanaSongs = [
      { id: 1, name: 'Smells Like Teen Spirit' },
      { id: 2, name: 'Come As You Are' },
      { id: 3, name: 'Lithium' }
    ];
    const wrapper = shallow(<Songs songs={nirvanaSongs}  />);
    expect(wrapper.html()).toContain('Come As You Are');
  })

})