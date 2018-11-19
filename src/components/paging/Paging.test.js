import React from 'react';
import Paging from './Paging';
import { shallow } from 'enzyme';

describe('Paging component', () => {


  it('renders a Paging component', () => {
    const currentPage = 3;
    const totalPages = 10;
    const updatePage = jest.fn();
    const wrapper = shallow(<Paging currentPage={currentPage} totalPages={totalPages} updatePage={updatePage} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has the current page rendered', () => {
    const currentPage = 3;
    const totalPages = 10;
    const updatePage = jest.fn();
    const wrapper = shallow(<Paging currentPage={currentPage} totalPages={totalPages} updatePage={updatePage} />);
    expect(wrapper.html()).toContain(currentPage);
  });
  it('displays total pages', () => {
    const totalPages = 10;
    const updatePage = jest.fn();
    const wrapper = shallow(<Paging currentPage={1} totalPages={totalPages} updatePage={updatePage} />);
    expect(wrapper.html()).toContain(totalPages);
  });

  it('has a previous button when current page is greater than 0', () => {
    const updatePage = jest.fn();
    const wrapper = shallow(<Paging currentPage={2} totalPages={10} updatePage={updatePage} />);
    expect(wrapper.find('button').at(0).text()).toEqual('Previous');
  });

  it('has a next button', () => {
    const updatePage = jest.fn();
    const wrapper = shallow(<Paging currentPage={2} totalPages={10} updatePage={updatePage} />);
    expect(wrapper.find('button').at(1).text()).toEqual('Next');
  });

  it('decrements currentPage when previous button is clicked', () => {
    const updatePageFn = jest.fn();
    const wrapper = shallow(<Paging currentPage={10} totalPages={10} updatePage={updatePageFn}/>);
    wrapper.find('button').at(0).simulate('click');
    expect(updatePageFn.mock.calls[0][0]).toEqual(9);
  });

  it('increments currentPage when next button is clicked', () => {
    const updatePageFn = jest.fn();
    const wrapper = shallow(<Paging currentPage={10} totalPages={20} updatePage={updatePageFn}/>);
    wrapper.find('button').at(1).simulate('click');
    expect(updatePageFn.mock.calls[0][0]).toEqual(11);
  });

  it('doesn\'t display previous button when currentPage is 1', () => {
    const updatePage = jest.fn();
    const wrapper = shallow(<Paging currentPage={1} totalPages={20} updatePage={updatePage} />);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').at(0).text()).toEqual('Next');
  });

  it('doesn\'t display next button when currentPage === nextPage', () => {
    const updatePage = jest.fn();
    const wrapper = shallow(<Paging currentPage={20} totalPages={20} updatePage={updatePage} />);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').at(0).text()).toEqual('Previous');
  });
});
