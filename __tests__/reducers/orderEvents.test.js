import {
  selectOrderEvents,
  selectInactiveOrders,
  selectFilledOrders,
  orderEvents as orderEventsReducer,
} from '../../src/reducers';
import { refreshOrderEvents, newOrderEvents } from '../../src/actions';

const mockEvents = [
  {
    client_order_id: null,
    cumulative_quantity: '0',
    destination: 'SSHIFTFX',
    expire_time: 1541072745910,
    id: 'BTC-70',
    is_agressor: null,
    order_id: 'f374c5fc-7a8e-4f70-936e-b7ce6a6b9b12',
    order_side: 'sell',
    order_status: 'completely_filled',
    order_type: null,
    original_client_order_id: null,
    price: null,
    properties: null,
    quantity: '10',
    reason: null,
    remaining_quantity: '10',
    security_id: 'BTCUSD',
    sequence_number: 70,
    time_in_force: null,
    timestamp: 1539605169054,
    trade_price: '6929.4',
    trade_quantity: '0.1',
    type: 'trade'
  },
  {
    client_order_id: null,
    cumulative_quantity: '0',
    destination: 'SSHIFTFX',
    expire_time: 1541072745910,
    id: 'USD-16',
    is_agressor: null,
    order_id: '37307aa2-9b1a-4220-9108-a29499a49db0',
    order_side: 'buy',
    order_status: 'canceled',
    order_type: null,
    original_client_order_id: null,
    price: null,
    properties: null,
    quantity: '1',
    reason: null,
    remaining_quantity: '1',
    security_id: 'BTCUSD',
    sequence_number: 16,
    time_in_force: null,
    timestamp: 1539345685259,
    trade_price: null,
    trade_quantity: null,
    type: 'cancel'
  }
];

describe('orderEventsReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = orderEventsReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual([]);
  });

  it('should return the current state on an unknown action', () => {
    let currentState = [];
    const state = orderEventsReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('refreshOrderEvents', () => {
    it('should refresh the order events', () => {
      let state = [];
      state = orderEventsReducer(state, refreshOrderEvents(mockEvents));
      expect(state).toEqual(mockEvents);
    });
  });

  describe('newOrderEvents', () => {
    it('should should add the new order events', () => {
      let state = [];
      state = orderEventsReducer(state, newOrderEvents(mockEvents));
      expect(state).toEqual(mockEvents);
    });
  });
});

describe('selectOrderEvents', () => {
  it('should return the order events', () => {
    const state = mockEvents;
    const result = selectOrderEvents({ orderEvents: state });
    expect(result).toEqual(state);
  });
});

describe('selectInactiveOrders', () => {
  it('should return the inactive orders', () => {
    const state = mockEvents;
    const result = selectInactiveOrders({ orderEvents: state });
    expect(result).toEqual([state[1]]);
  });
});

describe('selectFilledOrders', () => {
  it('should return the filled orders', () => {
    const state = mockEvents;
    const result = selectFilledOrders({ orderEvents: state });
    expect(result).toEqual([state[0]]);
  });
});
