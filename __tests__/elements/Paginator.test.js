import React from 'react';
import Paginator from '../../src/elements/Paginator';

describe('<Paginator/>', () => {
  describe('basic rendering', () => {
    const mockProps = {
      currentPage: 1,
      setPage: jest.fn(),
      numItems: 5,
      itemsPerPage: 5
    };

    it('renders and matches the snapshot', () => {
      const wrapper = shallow(<Paginator {...mockProps} />);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('span').hasClass('active')).toBe(true);
    });

    it('renders enough page buttons to fit all items', () => {
      mockProps.numItems = 15;
      const wrapper = shallow(<Paginator {...mockProps} />);
      expect(wrapper.find('span.paginator-num').length).toBe(3);
      expect(wrapper.find('span.pos-0').length).toBe(1);
      expect(wrapper.find('span.pos-1').length).toBe(1);
      expect(wrapper.find('span.pos-2').length).toBe(1);
    });

    it('renders the leftExtreme button', () => {
      mockProps.currentPage = 5;
      mockProps.numItems = 25;
      const wrapper = shallow(<Paginator {...mockProps} />);
      expect(wrapper.find('span.paginator-left-ext').exists()).toBe(true);
      expect(wrapper.containsMatchingElement(<i className="fas fa-chevron-double-left" />)).toBe(
        true
      );
    });

    it('renders the rightExtreme button', () => {
      mockProps.currentPage = 1;
      const wrapper = shallow(<Paginator {...mockProps} />);
      expect(wrapper.find('span.paginator-right-ext').exists()).toBe(true);
      expect(wrapper.containsMatchingElement(<i className="fas fa-chevron-double-right" />)).toBe(
        true
      );
    });
  });

  describe('click functionality', () => {
    const mockProps = {
      currentPage: 5,
      setPage: jest.fn(),
      numItems: 40,
      itemsPerPage: 5
    };
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Paginator {...mockProps} />);
      mockProps.setPage.mockClear();
    });

    it('fires setPage function when a page button is clicked', () => {
      const currentlyActive = wrapper.find('.active');
      expect(currentlyActive.props().className).toBe('paginator-num pos-0 active');
      // simulate clicking on the next page button
      wrapper.find('.pos-1').simulate('click');
      expect(mockProps.setPage).toHaveBeenCalledWith(mockProps.currentPage + 1);
    });

    it('fires setPage function with argument 1 when leftExtreme button is clicked', () => {
      wrapper.find('.paginator-left-ext').simulate('click');
      expect(mockProps.setPage).toHaveBeenCalledWith(1);
    });

    it('fires setPage function with argument "maxPages" when rightExtreme button is clicked', () => {
      const maxPages = Math.ceil(mockProps.numItems / mockProps.itemsPerPage);
      wrapper.find('.paginator-right-ext').simulate('click');
      expect(mockProps.setPage).toHaveBeenCalledWith(maxPages);
    });
  });
});