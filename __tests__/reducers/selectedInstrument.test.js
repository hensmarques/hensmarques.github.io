import { selectedInstrument as selectedInstrumentReducer } from '../../src/reducers';
import { setInstrument, invalidInstrument } from '../../src/actions';

describe('selectedInstrumentReducer', () => {
  const mockInstrument = 'BTCGBP';
  const mockInstrumentObj = {
    base: 'BTC',
    id: 'BTCGBP',
    quote: 'GBP',
    quoteDecimals: 3
  };

  it('should set the initial state when nothing is passed in', () => {
    const state = selectedInstrumentReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({});
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = selectedInstrumentReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('setInstrument', () => {
    it('should set the instrument', () => {
      let state = {};
      state = selectedInstrumentReducer(state, setInstrument(mockInstrument, mockInstrumentObj));
      expect(state).toEqual(mockInstrumentObj);
    });
  });

  describe('invalidInstrument', () => {
    it('should reject the invalid instrument', () => {
      let state = {};
      state = selectedInstrumentReducer(state, invalidInstrument('INVALIDUSD'));
      expect(state).toEqual({});
    });
  });
});
