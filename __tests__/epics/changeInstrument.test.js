import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import changeInstrumentEpic from '../../src/epics/changeInstrument';
import { setInstrument, invalidInstrument } from '../../src/actions';
import types from '../../src/actions/types';

const mockInstruments = {
  BTCUSD: {
    id: 'BTCUSD',
    base: 'BTC',
    quote: 'USD',
    quoteDecimals: 5,
    quantityDecimals: 4,
    type: 'crypto',
    quantityIncrement: '0.0001',
    fees: {
      buy: {
        method: 'quantity_percent',
        maker: '0.125',
        taker: '0.125',
      },
      sell: {
        method: 'quantity_percent',
        maker: '0.125',
        taker: '0.125',
      },
    },
  },
};

const state$ = of({
  instruments: mockInstruments,
});

describe('changeInstrumentEpic', () => {
  it('dispatches the correct actions when it is successful', async (done) => {
    const mockInstrument = 'BTCUSD';
    const action$ = ActionsObservable.of({
      type: types.user.changeInstrument,
      instrument: mockInstrument,
    });
    const expectedActions = [setInstrument(mockInstrument, mockInstruments[`${mockInstrument}`])];

    const result$ = changeInstrumentEpic(action$, state$);
    return await result$.forEach((action) => {
      expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
      expect(sessionStorage.setItem).toHaveBeenCalledWith(
        'selectedInstrument',
        JSON.stringify(mockInstruments[`${mockInstrument}`]),
      );
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockInvalidInstrument = 'FOOUSD';
    const action$ = ActionsObservable.of({
      type: types.user.changeInstrument,
      instrument: mockInvalidInstrument,
    });
    const expectedActions = [invalidInstrument(mockInvalidInstrument)];

    sessionStorage.setItem.mockClear();

    const result$ = changeInstrumentEpic(action$, state$);
    return await result$.forEach((action) => {
      expect(sessionStorage.setItem).not.toHaveBeenCalled();
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
