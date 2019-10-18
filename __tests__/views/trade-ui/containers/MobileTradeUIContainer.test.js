import React from 'react';
import { MobileUIContainer } from '../../../../src/views/trade-ui/containers/MobileTradeUIContainer';

describe('<MobileUIContainer/>', () => {
  const tradeUi = {
    mobileInitialComponent: 'Trade',
    dropdownInstrumentSelect: true,
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MobileUIContainer tradeUi={tradeUi} />);
  });

  it('renders and matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('updates the currently active widget when nav elements are clicked', () => {
    const navItem1 = wrapper.find('span').first();
    const navItem2 = wrapper.find('span').last();
    navItem1.simulate('click');
    expect(wrapper.state().currentWidget).toBe(navItem1.text());
    navItem2.simulate('click');
    expect(wrapper.state().currentWidget).toBe(navItem2.text());
  });
});

test('with no dropdown instrument select', () => {
  const eventListenerSpy = jest.fn();
  document.querySelector = jest.fn().mockImplementation(() => ({
    addEventListener: eventListenerSpy,
  }));
  const tradeUi = {
    mobileInitialComponent: 'Trade',
    dropdownInstrumentSelect: false,
  };
  const wrapper = shallow(<MobileUIContainer tradeUi={tradeUi} />);
  expect(Object.keys(wrapper.state().widgets).includes('Pairs')).toBe(true);
  expect(eventListenerSpy).toHaveBeenCalledTimes(1);
});
