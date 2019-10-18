import React from 'react';
import Button from '../../src/elements/Button';

describe('<Button/>', () => {
  it('renders with default props and matches the snapshot', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom props and children', () => {
    const mockProps = {
      className: 'mockClass',
      value: 'mockValue',
      onBlur: jest.fn(),
      onFocus: jest.fn(),
      disabled: true
    };
    const wrapper = shallow(<Button {...mockProps}>mockButtonText</Button>);
    expect(wrapper.props().className).toBe(`button ${mockProps.className} disabled `);
    expect(wrapper.props().value).toBe(mockProps.value);
    expect(wrapper.props().onBlur).toBe(mockProps.onBlur);
    expect(wrapper.props().onFocus).toBe(mockProps.onFocus);
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.text()).toBe('mockButtonText');
  });

  it('renders a loading indicator', () => {
    const wrapper = shallow(<Button loading loadingStatus/>);
    expect(wrapper.hasClass('loading')).toBe(true);
    expect(wrapper.containsMatchingElement(<i className="fa fa-spinner fa-spin" />)).toBe(true);
  });

  it('fires the onClick callback when clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Button onClick={callback} />);
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  describe('button type translations', () => {
    let translationSpy;
    beforeEach(() => {
      translationSpy = jest.spyOn(window, '_t').mockClear();
    });
    
    it('translates a close type button', () => {
      const wrapper = shallow(<Button type="close" />);
      expect(translationSpy).toHaveBeenCalledWith('Close', 'BUTTON.CLOSE');
    });

    it('translates a submit type button', () => {
      const wrapper = shallow(<Button type="submit" />);
      expect(translationSpy).toHaveBeenCalledWith('Submit', 'BUTTON.SUBMIT');
    });
  })
});
