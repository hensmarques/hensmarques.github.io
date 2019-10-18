import React from 'react';
import Accordion from '../../src/elements/Accordion';

describe('<Accordion/>', () => {
  it('renders with default props and matches the snapshot', () => {
    const wrapper = shallow(<Accordion />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders custom props correctly', () => {
    const mockProps = {
      className: 'mockClass',
      accordionButton: 'Click Me'
    };
    const wrapper = shallow(
      <Accordion {...mockProps}>
        <p>mock child content</p>
      </Accordion>
    );
    expect(wrapper.hasClass(mockProps.className)).toBe(true);
    expect(wrapper.find('button').text()).toBe(mockProps.accordionButton);
    expect(wrapper.containsMatchingElement(<p>mock child content</p>)).toBe(true);
  });

  it('fires onClick and toggles active state when accordion button is clicked', () => {
    const wrapper = shallow(<Accordion />);
    const onClickSpy = jest.spyOn(wrapper.instance(), 'onClick');
    expect(wrapper.state().active).toBe(false);
    expect(wrapper.find('Fade').props().when).toBe(false);
    wrapper.find('.accordion-button').simulate('click');
    expect(wrapper.state().active).toBe(true);
    expect(wrapper.find('Fade').props().when).toBe(true);
    expect(onClickSpy).toHaveBeenCalled();
  });
});
