import React from 'react';
import { createMockStore } from 'redux-test-utils';
import WidgetWrapper from '../../src/elements/WidgetWrapper';

// Mock child components
const OrderEntry = () => null;
const Balances = () => null;

const mockProps = {
  tabs: ['Order Entry', 'Balances'],
  classNames: ['order-entry', 'balances'],
};
const mockState = {
  config: { debug: {} },
};

describe('<WidgetWrapper/>', () => {
  const store = createMockStore(mockState);
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithStore(
      <WidgetWrapper {...mockProps}>
        <OrderEntry />
        <Balances />
      </WidgetWrapper>,
      store,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders and matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('user can switch widget content by clicking tabs', () => {
    expect(wrapper.state().activeWidget).toEqual({ index: 0, className: mockProps.classNames[0] });
    expect(wrapper.find('OrderEntry').exists()).toBe(true);
    expect(wrapper.find('Balances').exists()).toBe(false);
    expect(wrapper.find('.active').props().children).toBe('Order Entry');
    wrapper.find({ children: 'Balances' }).simulate('click'); // click Balances component-tab
    expect(wrapper.state().activeWidget).toEqual({ index: 1, className: mockProps.classNames[1] });
    expect(wrapper.find('OrderEntry').exists()).toBe(false);
    expect(wrapper.find('Balances').exists()).toBe(true);
    expect(wrapper.find('.active').props().children).toBe('Balances');
  });
});
