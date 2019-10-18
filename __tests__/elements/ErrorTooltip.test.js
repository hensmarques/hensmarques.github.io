import React from 'react';
import ErrorTooltip from '../../src/elements/ErrorTooltip';

describe('<ErrorTooltip/>', () => {
  it('renders nothing when there are no error messages', () => {
    const wrapper = shallow(<ErrorTooltip />);
    expect(wrapper.html()).toBe(null);
  });

  it('renders error messages and matches the snapshot', () => {
    const mockErrorMessages = ['one', 'two', 'three'];
    const wrapper = shallow(<ErrorTooltip errorMessages={mockErrorMessages} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.form-icon-container').props()['data-tip']).toBe(mockErrorMessages.join('<br />'));
  });
});
