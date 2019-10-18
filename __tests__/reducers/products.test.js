import { products as productsReducer }from '../../src/reducers';
import { setProducts } from '../../src/actions';

describe('productsReducer', () => {
  const mockProducts = [
    {
      id: 'BTC',
      type: 'crypto',
      name: 'Bitcoin',
      precision: 8,
      withdrawalCommission: '5',
      depositCommission: '2',
      decimals: 8
    },
    {
      id: 'ETH',
      type: 'crypto',
      name: 'Ethereum',
      precision: 3,
      withdrawalCommission: '5',
      depositCommission: '2',
      decimals: 3
    }
  ];

  it('should set the initial state when nothing is passed in', () => {
    const state = productsReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({});
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {
      BTC: {
        id: 'BTC',
        type: 'crypto',
        name: 'Bitcoin',
        precision: 8,
        withdrawalCommission: '5',
        depositCommission: '2',
        decimals: 8
      },
      ETH: {
        id: 'ETH',
        type: 'crypto',
        name: 'Ethereum',
        precision: 3,
        withdrawalCommission: '5',
        depositCommission: '2',
        decimals: 3
      }
    };
    const state = productsReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('setProducts', () => {
    it('should set the active accounts balances', () => {
      let state = {};
      state = productsReducer(state, setProducts(mockProducts));
      expect(Object.keys(state)).toEqual([mockProducts[0].id, mockProducts[1].id]);
      expect(state).toEqual({
        BTC: {
          id: 'BTC',
          type: 'crypto',
          name: 'Bitcoin',
          precision: 8,
          withdrawalCommission: '5',
          depositCommission: '2',
          decimals: 8
        },
        ETH: {
          id: 'ETH',
          type: 'crypto',
          name: 'Ethereum',
          precision: 3,
          withdrawalCommission: '5',
          depositCommission: '2',
          decimals: 3
        }
      });
    });
  });
});
