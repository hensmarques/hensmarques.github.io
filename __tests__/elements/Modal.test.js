import React from 'react';
import { Modal } from '../../src/elements/Modal';

describe('<Modal/>', () => {
  it('renders with default props and matches the snapshot', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders custom props and children correctly', () => {
    const mockProps = {
      className: 'mockClass',
      onClose: jest.fn()
    };
    const mockChildComponent = <p>mock child content</p>;
    const wrapper = shallow(
      <Modal {...mockProps}>
        {mockChildComponent}
      </Modal>
    );
    expect(wrapper.find('.modal-wrapper').hasClass(mockProps.className)).toBe(true);
    expect(wrapper.find('.modal-wrapper').props().onClick).toBe(mockProps.onClose);
    expect(wrapper.find('i').props().onClick).toBe(mockProps.onClose);
    expect(wrapper.find('.modal-content').containsMatchingElement(mockChildComponent)).toBe(true);
  });

  describe('Click functionality', () => {
    const onClose = jest.fn();
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Modal onClose={onClose} />);
      onClose.mockClear();
    });

    it('fires onClose when modal wrapper is clicked', () => {
      wrapper.find('.modal-wrapper').simulate('click');
      expect(onClose).toHaveBeenCalled();
    });
  
    it('fires onClose when close icon is clicked', () => {
      wrapper.find('i').simulate('click');
      expect(onClose).toHaveBeenCalled();
    });

    it('stops propagation when modal content is clicked', () => {
      const mockEvent = { stopPropagation: jest.fn() };
      wrapper.find('.modal-content').simulate('click', mockEvent);
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });
  });
});
