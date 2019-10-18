import React from 'react';
import { createMockStore } from 'redux-test-utils';
import BuySellCustomModal from '../../../../src/views/simple-ui/buy-sell/BuySellCustomModal';

test('the custom modal renders with a success message when order is accepted', () => {
  const mockState = { orderStatus: { status: 'accepted', message: null }, config: { debug: {} } };
  const store = createMockStore(mockState);
  const onCloseMock = jest.fn();
  const wrapper = mountWithStore(<BuySellCustomModal onClose={onCloseMock} />, store);
  expect(wrapper.find('Modal').props().onClose).toEqual(onCloseMock);
  expect(wrapper.text()).toMatch(/order submitted and executed successfully/i);
});

test('the custom modal renders with a failure message when order is rejected', () => {
  const mockState = {
    orderStatus: { status: 'rejected', message: '0 quantity less than minimum allowed 0.01' },
    config: { debug: {} },
  };
  const store = createMockStore(mockState);
  const wrapper = mountWithStore(<BuySellCustomModal />, store);
  expect(wrapper.text()).toMatch(/there was an error placing your order/i);
  expect(wrapper.text()).toMatch(mockState.orderStatus.message);
});
