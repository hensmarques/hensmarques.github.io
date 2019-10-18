import React from 'react';
import ToggleSwitch from '../../src/elements/ToggleSwitch';

describe('<ToggleSwitch/>', () => {
  const mockProps = {
    value: true,
    onChange: jest.fn()
  };

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ToggleSwitch {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('fires onChange when the switch is toggled', () => {
    const wrapper = shallow(<ToggleSwitch {...mockProps} />);
    expect(wrapper.find('ReactSwitch').props().checked).toBe(true);
    wrapper.find('ReactSwitch').simulate('change', false);
    expect(mockProps.onChange).toHaveBeenCalledWith(false);
  });
});
