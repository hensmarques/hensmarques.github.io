import React from 'react';
import Tooltip from '../../src/elements/ToolTip';

describe('<Tooltip/>', () => {
  it('renders with default props and matches the snapshot', () => {
    const wrapper = shallow(<Tooltip />);
    expect(wrapper).toMatchSnapshot();
  });

  it('wraps the tooltip-trigger around children', () => {
    const wrapper = shallow(
      <Tooltip>
        <p>mock child</p>
      </Tooltip>
    );
    expect(wrapper.find('.tooltip-trigger').text()).toBe('mock child');
  });

  it('shows and hides the tooltip message on mouseover and mouseleave', () => {
    const wrapper = shallow(<Tooltip message="mockMessage">trigger</Tooltip>);
    const showTooltiptipSpy = jest.spyOn(wrapper.instance(), 'showTooltip');
    const hideTooltipSpy = jest.spyOn(wrapper.instance(), 'hideTooltip');
    wrapper.instance().forceUpdate();
    expect(wrapper.state().displayTooltip).toBe(false);

    const trigger = wrapper.find('.tooltip-trigger');
    trigger.simulate('mouseover');
    expect(wrapper.state().displayTooltip).toBe(true);
    expect(showTooltiptipSpy).toHaveBeenCalled();
    expect(
      wrapper.containsMatchingElement(
        <div className="tooltip-bubble tooltip-top">
          <div className="tooltip-message">mockMessage</div>
        </div>
      )
    ).toBe(true);

    wrapper.simulate('mouseleave');
    expect(wrapper.state().displayTooltip).toBe(false);
    expect(wrapper.find('.tooltip-bubble').exists()).toBe(false);
    expect(wrapper.find('.tooltip-message').exists()).toBe(false);
    expect(hideTooltipSpy).toHaveBeenCalled();
  });

  describe('alternative tooltip message positions', () => {
    it('displays a bottom-positioned tooltip message', () => {
      const position = 'bottom';
      const wrapper = shallow(
        <Tooltip message="mockMessage" position={position}>
          trigger
        </Tooltip>
      );
      wrapper.find('.tooltip-trigger').simulate('mouseover');
      expect(wrapper.find('.tooltip-bubble').hasClass(`tooltip-${position}`)).toBe(true);
    });

    it('displays a right-positioned tooltip message', () => {
      const position = 'right';
      const wrapper = shallow(
        <Tooltip message="mockMessage" position={position}>
          trigger
        </Tooltip>
      );
      wrapper.find('.tooltip-trigger').simulate('mouseover');
      expect(wrapper.find('.tooltip-bubble').hasClass(`tooltip-${position}`)).toBe(true);
    });

    it('displays a left-positioned tooltip message', () => {
      const position = 'left';
      const wrapper = shallow(
        <Tooltip message="mockMessage" position={position}>
          trigger
        </Tooltip>
      );
      wrapper.find('.tooltip-trigger').simulate('mouseover');
      expect(wrapper.find('.tooltip-bubble').hasClass(`tooltip-${position}`)).toBe(true);
    });
  });
});
