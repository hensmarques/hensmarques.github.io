import { trades as tradesReducer } from '../../src/reducers/trades';
import { setTrades, updateBook, changeInstrument } from '../../src/actions';

describe('tradesReducer', () => {
  const mockTrades = [
    {
      action: 'trade',
      level: null,
      timestamp: null,
      side: 'buy',
      exchange_id: 'SSHIFTFX',
      number_of_orders: 0,
      quantity: '0.9195683',
      price: '0.01862',
    },
    {
      action: 'trade',
      level: null,
      timestamp: null,
      side: 'buy',
      exchange_id: 'BITFINEX',
      number_of_orders: 0,
      quantity: '0.0804317',
      price: '0.01863',
    },
  ];
  const mockUpdates = [
    {
      action: 'trade',
      level: null,
      timestamp: null,
      side: 'sell',
      exchange_id: 'SSHIFTFX',
      number_of_orders: 0,
      quantity: '0.20620536',
      price: '10730.47',
    },
    {
      action: 'insert',
      level: 13,
      timestamp: null,
      side: 'sell',
      exchange_id: 'SSHIFTFX',
      number_of_orders: null,
      quantity: '0.3',
      price: '10738.95',
    },
  ];
  const mockExchange = 'SSHIFTFX';

  it('should set the initial state when nothing is passed in', () => {
    const state = tradesReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual([]);
  });

  it('should return the current state on an unknown action', () => {
    const currentState = [];
    const state = tradesReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('setTrades', () => {
    it('should set the trades matching exchange', () => {
      let state = [];
      state = tradesReducer(state, setTrades(mockTrades, mockExchange));
      expect(state).toEqual([mockTrades[0]]);
    });
  });

  describe('updateBook', () => {
    it('should update the book with trades matching exchange', () => {
      let state = [];
      state = tradesReducer(state, updateBook(mockUpdates, mockExchange));
      expect(state).toEqual([mockUpdates[0]]);
    });
  });

  describe('changeInstrument', () => {
    it('should reset the trades', () => {
      let state = [];
      const mockInstrument = 'ETHUSD';
      state = tradesReducer(state, changeInstrument(mockInstrument));
      expect(state).toEqual([]);
    });
  });
});
