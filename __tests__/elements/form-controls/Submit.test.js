import React from 'react';
import Submit from '../../../src/elements/form-controls/Submit';

describe('<Submit/>', () => {
  it('renders with default props and matches the snapshot', () => {
    const wrapper = shallow(<Submit />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the props correctly', () => {
    const mockProps = {
      className: 'mockClass',
      value: 'Click Me',
      onSubmit: jest.fn(),
      onFocus: jest.fn(),
      onBlur: jest.fn(),
      formValid: true
    };
    const wrapper = shallow(<Submit {...mockProps} />);
    expect(wrapper.hasClass(mockProps.className)).toBe(true);
    expect(wrapper.find('input').hasClass(mockProps.className)).toBe(true);
    const inputProps = wrapper.find('input').props();
    expect(inputProps.value).toBe(mockProps.value);
    expect(inputProps.onFocus).toBe(mockProps.onFocus);
    expect(inputProps.onBlur).toBe(mockProps.onBlur);
    expect(inputProps.disabled).toBe(!mockProps.formValid);
  });

  it('fires onSubmit when component is clicked', () => {
    const mockProps = {
      onSubmit: jest.fn()
    };
    const wrapper = shallow(<Submit {...mockProps} />);
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.find('input').simulate('click', mockEvent);
    expect(mockProps.onSubmit).toHaveBeenCalledWith(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
