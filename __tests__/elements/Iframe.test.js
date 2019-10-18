import React from 'react';
import ShiftIframe from '../../src/elements/Iframe';

describe('<ShiftIframe/>', () => {
  it('renders with default props and matches the snapshot', () => {
    const wrapper = shallow(<ShiftIframe />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the props and children correctly', () => {
    const mockProps = {
      className: 'mockClass',
      width: '50%',
      height: '50%',
      allowFullScreen: true,
      src: 'mockSrc',
      id: 'mockId'
    };
    const wrapper = shallow(<ShiftIframe {...mockProps}>mockChild</ShiftIframe>);
    expect(wrapper.props().className).toBe(mockProps.className);
    expect(wrapper.props().width).toBe(mockProps.width);
    expect(wrapper.props().height).toBe(mockProps.height);
    expect(wrapper.props().allowFullScreen).toBe(mockProps.allowFullScreen);
    expect(wrapper.props().src).toBe(mockProps.src);
    expect(wrapper.props().id).toBe(mockProps.id);
    expect(wrapper.text()).toBe('mockChild');
  });
});
