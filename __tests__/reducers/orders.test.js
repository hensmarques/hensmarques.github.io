import { orders as ordersReducer } from '../../src/reducers';
import { selectOrders, selectOpenOrders } from '../../src/reducers';
import { updateOrder } from '../../src/actions';

const mockOrders = [
  {
    id: 'c525608b-4922-4227-b519-8b7d40981023',
    status: 'partially_filled',
    type: 'limit',
    side: 'buy',
    text: '',
    destination: 'SBITFINEX',
    properties: null,
    remaining_quantity: '0.1',
    average_price: '0',
    receipt_time: 1545222325795,
    cumulative_quantity: '0',
    security_id: 'BTCGBP',
    client_order_id: '29e46e70-0389-11e9-aaa4-1502a2ba9be5',
    quantity: '0.1',
    time_in_force: 'gtc',
    price: '1900',
    expire_time: 0,
    submission_time: null
  },
  {
    id: 'c525608b-4922-4227-b519-8b7d40981021',
    status: 'cancelled',
    type: 'limit',
    side: 'buy',
    text: '',
    destination: 'SBITFINEX',
    properties: null,
    remaining_quantity: '0.1',
    average_price: '0',
    receipt_time: 1545222325795,
    cumulative_quantity: '0',
    security_id: 'BTCGBP',
    client_order_id: '29e46e70-0389-11e9-aaa4-1502a2ba9be5',
    quantity: '0.1',
    time_in_force: 'gtc',
    price: '1900',
    expire_time: 0,
    submission_time: null
  }
];
const mockExchange = 'SBITFINEX';

describe('ordersReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = ordersReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({});
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = ordersReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('updateOrder', () => {
    it('should update the order', () => {
      let state = {};
      state = ordersReducer(state, updateOrder(mockOrders[0], mockExchange));
      expect(Object.keys(state)[0]).toBe(mockOrders[0].id);
      expect(Object.values(state)[0]).toEqual(mockOrders[0]);
    });

    it('should return the current state if action exchange does not match order destination', () => {
      let currentState = {};
      const state = ordersReducer(currentState, updateOrder(mockOrders[0], 'NOTANEXCHANGE'));
      expect(state).toBe(currentState);
    });
  });
});

describe('selectOrders', () => {
  it('should return the orders', () => {
    const state = ordersReducer({}, updateOrder(mockOrders[0], mockExchange));
    const result = selectOrders({orders: state});
    expect(result).toEqual(state);
  });
});

describe('selectOpenOrders', () => {
  it('should return the open orders', () => {
    let state = {};
    state = ordersReducer(state, updateOrder(mockOrders[0], mockExchange));
    state = ordersReducer(state, updateOrder(mockOrders[1], mockExchange));
    const result = selectOpenOrders({ orders: state });
    expect(result[0]).toEqual(mockOrders[0]);
  });
});
