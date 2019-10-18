import React from 'react';
import Header from '../../../src/elements/form-controls/Header';

describe('<Header/>', () => {
  it('renders with default props and matches the snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the props correctly', () => {
    const mockProps = {
      className: 'mockClass',
      name: 'mock header name',
      translation: 'en',
      headerType: 3,
    };
    const wrapper = shallow(<Header {...mockProps} />);
    expect(wrapper.hasClass(mockProps.className)).toBe(true);
    expect(wrapper.containsMatchingElement(<h3>{mockProps.name}</h3>)).toBe(true);
  });
});
