import React from 'react';
import Form from '../../../src/elements/form-controls/Form';

describe('<Form/>', () => {
  it('renders with default props without crashing', () => {
    shallow(<Form />);
  });

  it('renders custom props and children correctly', () => {
    const mockClassName = 'mockClass';
    const mockChildComponent = <input type="text" />;
    const wrapper = shallow(<Form className={mockClassName}>{mockChildComponent}</Form>);
    expect(wrapper.hasClass(mockClassName)).toBe(true);
    expect(wrapper.containsMatchingElement(mockChildComponent)).toBe(true);
  });

  it('fires preventDefault and onSubmit prop when form is submitted', () => {
    const onSubmit = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    const wrapper = shallow(<Form onSubmit={onSubmit} />);
    wrapper.simulate('submit', mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });
});
