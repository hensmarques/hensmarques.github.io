import React from 'react';
import { createMockStore } from 'redux-test-utils';
import FilledOrders from '../../../src/views/trade-ui/FilledOrders';
import { capitalize, getFormattedDate } from '../../../src/util/helpers';

const mockOrders = [
  {
    type: 'trade',
    reason: null,
    timestamp: 1564669514807,
    id: 'USD-4',
    destination: 'SSHIFTFX',
    properties: null,
    sequence_number: 4,
    security_id: 'BTCUSD',
    client_order_id: null,
    quantity: '0.0099',
    time_in_force: null,
    price: null,
    expire_time: 0,
    remaining_quantity: '0',
    average_price: '10010.25',
    order_id: 'd056cac7-e752-4d75-9f72-d7e4a1bd5dca',
    cumulative_quantity: '0.0099',
    order_type: 'market',
    order_side: 'buy',
    order_status: 'completely_filled',
    original_client_order_id: null,
    trade_quantity: '0.0099',
    trade_price: '10010.25',
    is_agressor: null,
  },
  {
    type: 'trade',
    reason: null,
    timestamp: 1564669514807,
    id: 'USD-4',
    destination: 'SSHIFTFX',
    properties: null,
    sequence_number: 4,
    security_id: 'BTCUSD',
    client_order_id: null,
    quantity: '0.01',
    time_in_force: null,
    price: null,
    expire_time: 0,
    remaining_quantity: '0',
    average_price: '9000.55',
    order_id: 'd156cac7-e752-4d75-9f72-d7e4a1bc9dca',
    cumulative_quantity: '0.01',
    order_type: 'market',
    order_side: 'sell',
    order_status: 'completely_filled',
    original_client_order_id: null,
    trade_quantity: '0.01',
    trade_price: '9000.55',
    is_agressor: null,
  },
];

test('user sees a loading indicator until order events are finished loading', () => {
  const mockState = {
    orderStatus: { orderEventsFinished: false },
    config: { tradeUi: { orderTableRows: 10 } },
    orderEvents: [],
  };
  const store = createMockStore(mockState);
  const wrapper = mountWithStore(<FilledOrders />, store);
  expect(wrapper.find('Spinner').exists()).toBe(true);
  expect(wrapper.find('.filled-orders-table').exists()).toBe(false);
  wrapper.unmount();
});

describe('<FilledOrders/> with order events loaded', () => {
  const mockState = {
    orderStatus: { orderEventsFinished: true },
    config: { tradeUi: { orderTableRows: 10 } },
    orderEvents: mockOrders,
  };
  const store = createMockStore(mockState);
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithStore(<FilledOrders />, store);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the filled orders table', () => {
    expect(
      wrapper.containsMatchingElement(
        <div className="table-header filled-orders-header">
          <span className="filled-orders-order-id">#</span>
          <span className="filled-orders-instrument">Pair</span>
          <span className="filled-orders-side">Side</span>
          <span className="filled-orders-quantity">Quantity</span>
          <span className="filled-orders-price">Price</span>
          <span className="filled-orders-total">Total</span>
          <span className="filled-orders-time">Time</span>
        </div>,
      ),
    ).toBe(true);

    expect(wrapper.find('OrderRow').length).toBe(mockOrders.length);
    expect(wrapper.find('CopyToClipboard').length).toBe(mockOrders.length);
    expect(wrapper.find('.filled-orders-row').length).toBe(mockState.config.tradeUi.orderTableRows);

    mockOrders.forEach((order) => {
      expect(wrapper.find({ text: order.order_id }).exists()).toBe(true);
      expect(
        wrapper.containsAllMatchingElements([
          <span className="filled-orders-instrument">{order.security_id}</span>,
          <span className={`filled-orders-side ${order.order_side}`}>
            {capitalize(order.order_side)}
          </span>,
          <span className="filled-orders-quantity">{order.quantity}</span>,
          <span className="filled-orders-price">{order.average_price}</span>,
          <span className="filled-orders-total">{order.quantity * order.average_price}</span>,
          <span className="filled-orders-time">{getFormattedDate(order.timestamp)}</span>,
        ]),
      ).toBe(true);
    });
  });

  test('user can navigate to a new page through pagination', () => {
    expect(wrapper.find('FilledOrders').state().page).toBe(1);

    const mockPage = 2;
    wrapper
      .find('Paginator')
      .props()
      .setPage(mockPage);
    expect(wrapper.find('FilledOrders').state().page).toBe(mockPage);
  });
});
