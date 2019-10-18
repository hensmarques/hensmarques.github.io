import { tickers as tickersReducer } from '../../src/reducers';
import { updateTickers, refreshTickers } from '../../src/actions';

describe('tickersReducer', () => {
  const mockTicks = [
    {
      ask: '23.831',
      bid: '23.82',
      price_24h_change: '0',
      price_24h_max: '23.831',
      price_24h_min: '23.82',
      security_id: 'LTCUSD',
      volume_24h_change: '0'
    },
    {
      ask: '0.02668067',
      bid: '0.02666832',
      price_24h_change: '0.000404495',
      price_24h_max: '0.02716587',
      price_24h_min: '0.02615553',
      security_id: 'ETHBTC',
      volume_24h_change: '0'
    }
  ];

  it('should set the initial state when nothing is passed in', () => {
    const state = tickersReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({});
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = tickersReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('updateTickers', () => {
    it('should update the tickers', () => {
      let state = {};
      state = tickersReducer(state, updateTickers(mockTicks));
      expect(Object.keys(state)).toEqual([mockTicks[0].security_id, mockTicks[1].security_id]);
      expect(Object.values(state)).toEqual([mockTicks[0], mockTicks[1]]);
    });
  });

  describe('refreshTickers', () => {
    it('should refresh the tickers', () => {
      let state = {};
      state = tickersReducer(state, refreshTickers(mockTicks));
      expect(Object.keys(state)).toEqual([mockTicks[0].security_id, mockTicks[1].security_id]);
      expect(Object.values(state)).toEqual([mockTicks[0], mockTicks[1]]);
    });
  });
});
