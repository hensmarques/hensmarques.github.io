import React from 'react';
import CopyToClipboard from '../../src/elements/CopyToClipboard';

describe('<CopyToClipboard/>', () => {
  it('renders with default props', () => {
    const defaultProps = {
      text: '',
      length: null,
    };
    shallow(<CopyToClipboard {...defaultProps} />);
  });

  const props = {
    text: '7s89dfs7-dfjsd893r-dfsf93',
    length: 25,
  };

  it('renders with custom props and matches snapshot', () => {
    const wrapper = shallow(<CopyToClipboard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('copies text when clicked', () => {
    const wrapper = shallow(<CopyToClipboard {...props} />);
    const spyExecCommand = jest.fn();
    Object.defineProperty(global.document, 'execCommand', { value: spyExecCommand });
    wrapper.find('.element-copy-text').simulate('click');
    expect(spyExecCommand).toHaveBeenCalledTimes(1);
    expect(spyExecCommand).toHaveBeenCalledWith('copy');
  });
});
