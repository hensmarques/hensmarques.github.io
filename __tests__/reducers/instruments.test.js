import { instruments as instrumentsReducer } from '../../src/reducers';
import { setInstruments } from '../../src/actions';

describe('instrumentsReducer', () => {
  const mockInstruments = [
    {
      base: 'BTC',
      id: 'BTCGBP',
      quote: 'GBP',
      quoteDecimals: 3
    },
    {
      base: 'ETH',
      id: 'ETHBTC',
      quote: 'BTC',
      quoteDecimals: 9
    }
  ];

  it('should set the initial state when nothing is passed in', () => {
    const state = instrumentsReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({});
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = instrumentsReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('setInstruments', () => {
    it('should set the instruments', () => {
      let state = {};
      state = instrumentsReducer(state, setInstruments(mockInstruments));
      expect(Object.keys(state)).toEqual([mockInstruments[0].id, mockInstruments[1].id]);
      expect(state).toEqual({
        BTCGBP: {
          base: mockInstruments[0].base,
          id: mockInstruments[0].id,
          quote: mockInstruments[0].quote,
          quoteDecimals: mockInstruments[0].quoteDecimals
        },
        ETHBTC: {
          base: mockInstruments[1].base,
          id: mockInstruments[1].id,
          quote: mockInstruments[1].quote,
          quoteDecimals: mockInstruments[1].quoteDecimals
        }
      });
    });
  });
});
