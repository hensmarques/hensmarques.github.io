import React from 'react';
import { createMockStore } from 'redux-test-utils';
import OrderEntry from '../../../src/views/trade-ui/OrderEntry';
import types from '../../../src/actions/types';
import { advancedOrderTypes } from '../../../src/constants';
import { getFee } from '../../../src/util';

const mockState = {
  selectedInstrument: {
    id: 'BTCUSD',
    base: 'BTC',
    quote: 'USD',
    quoteDecimals: 5,
    quantityDecimals: 4,
    type: 'crypto',
    quantityIncrement: '0.0001',
    minimumQuantity: '0.0001',
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
  orderbook: {
    asks: [
      { quantity: '0.07', number_of_orders: null, price: 9415.035 },
      { quantity: '0.01', number_of_orders: null, price: 9417.53 },
    ],
    bids: [
      { quantity: '0.189', number_of_orders: null, price: 9410.84 },
      { quantity: '0.4', number_of_orders: null, price: 9413.74 },
    ],
  },
  tickers: {
    BTCUSD: {
      security_id: 'BTCUSD',
      bid: '3990',
      ask: '4000',
      price_24h_change: '3.87',
      volume_24h_change: '0',
      price_24h_max: '4200',
      price_24h_min: '3600',
    },
  },
  products: {
    BTC: {
      id: 'BTC',
      type: 'crypto',
      name: 'BTC',
      precision: 8,
      withdrawalCommission: '5',
      depositCommission: '2',
      decimals: 8,
      balance: 0,
      hold: 0,
    },
    USD: {
      id: 'USD',
      type: 'fiat',
      name: 'USD',
      precision: 8,
      withdrawalCommission: '5',
      depositCommission: '2',
      decimals: 2,
      balance: 0,
      hold: 0,
    },
  },
  orderStatus: { status: null, message: null },
};

describe('<OrderEntry/>', () => {
  const store = createMockStore(mockState);
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithStore(<OrderEntry />, store);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders and loads data on mount', () => {
    expect(wrapper.find('.order-entry-type-buttons')).toMatchSnapshot();
    expect(wrapper.find('.order-entry-action-buttons')).toMatchSnapshot();
    expect(wrapper.find('.order-entry-summary')).toMatchSnapshot();
    expect(wrapper.find('.field-label').text()).toBe(
      `Buy Amount (${mockState.selectedInstrument.base})`,
    );
    expect(store.isActionTypeDispatched(types.app.loadAccounts)).toBe(true);
    expect(
      store.isActionDispatched({
        type: types.app.loadL2Data,
        instrument: mockState.selectedInstrument.id,
      }),
    ).toBe(true);
  });

  test('user can choose different order types and change between buying/selling', () => {
    expect(wrapper.find('OrderEntry').state().currentType).toBe('market');
    expect(wrapper.find('.order-entry-type-button.selected').text()).toMatch(/market/i);
    expect(
      wrapper.containsMatchingElement(
        <div className="field-label">{`Buy Amount (${mockState.selectedInstrument.base})`}</div>,
      ),
    ).toBe(true);

    wrapper.find({ children: 'Limit' }).simulate('click');
    expect(wrapper.find('OrderEntry').state().currentType).toBe('limit');
    expect(wrapper.find('.order-entry-type-button.selected').text()).toMatch(/limit/i);
    expect(
      wrapper.containsAllMatchingElements([
        <div className="field-label">Order Type</div>,
        <option value="gtc">Good Til Canceled</option>,
        <option value="fok">Fill Or Kill</option>,
        <option value="ioc">Immediate Or Cancel</option>,
        <option value="gtd">Good Til Date</option>,
        <option value="day">Day</option>,
        <div className="field-label">{`Buy Amount (${mockState.selectedInstrument.base})`}</div>,
        <div className="field-label">{`Limit Price (${mockState.selectedInstrument.quote})`}</div>,
      ]),
    ).toBe(true);

    wrapper.find({ children: 'Stop' }).simulate('click');
    expect(wrapper.find('OrderEntry').state().currentType).toBe('stop');
    expect(wrapper.find('.order-entry-type-button.selected').text()).toMatch(/stop/i);
    expect(
      wrapper.containsAllMatchingElements([
        <div className="field-label">Order Type</div>,
        <option value="gtc">Good Til Canceled</option>,
        <option value="fok">Fill Or Kill</option>,
        <option value="ioc">Immediate Or Cancel</option>,
        <option value="gtd">Good Til Date</option>,
        <option value="day">Day</option>,
        <div className="field-label">{`Buy Amount (${mockState.selectedInstrument.base})`}</div>,
        <div className="field-label">{`Stop Price (${mockState.selectedInstrument.quote})`}</div>,
      ]),
    ).toBe(true);

    expect(wrapper.find('OrderEntry').state().currentAction).toBe('buy');
    wrapper.find({ children: 'Sell' }).simulate('click');
    expect(wrapper.find('OrderEntry').state().currentAction).toBe('sell');
    expect(
      wrapper.containsMatchingElement(
        <div className="field-label">{`Sell Amount (${mockState.selectedInstrument.base})`}</div>,
      ),
    ).toBe(true);
  });

  test('Order quantity is validated and error is presented to user in tooltip', () => {
    expect(wrapper.find('OrderEntry').state().orderQuantityErrors).toEqual([]);
    const minQuantityIncrement = mockState.selectedInstrument.quantityIncrement;
    const minAllowedQuantity = mockState.selectedInstrument.minimumQuantity;
    const mockAmount = (+minAllowedQuantity / 2).toString();
    const mockEvent = { target: { value: mockAmount } };
    wrapper
      .find('.order-entry-form')
      .find('input')
      .simulate('change', mockEvent);
    expect(
      wrapper
        .find('.order-entry-form')
        .find('ErrorTooltip')
        .exists(),
    ).toBe(true);
    expect(
      wrapper
        .find({
          'data-tip': `Quantity Increment ${minQuantityIncrement}<br />Minimum Quantity ${minAllowedQuantity}`,
        })
        .exists(),
    ).toBe(true);
    expect(wrapper.find('OrderEntry').state().orderQuantityErrors).toEqual([
      `Quantity Increment ${minQuantityIncrement}`,
      `Minimum Quantity ${minAllowedQuantity}`,
    ]);
  });

  test('user is presented with a summary of order details and can place the order', () => {
    const mockAmount = '2';
    const mockEvent = { target: { value: mockAmount } };
    wrapper
      .find('.order-entry-form')
      .find('input')
      .simulate('change', mockEvent);
    const expectedFee = getFee(
      mockAmount,
      wrapper.find('OrderEntry').state().currentAction,
      mockState.selectedInstrument.fees,
    );
    expect(
      wrapper.containsAllMatchingElements([
        <div className="market-price">
          {mockState.tickers[mockState.selectedInstrument.id].ask}
          {' '}
          {mockState.selectedInstrument.quote}
        </div>,
        <div className="order-total">
          {mockState.tickers[mockState.selectedInstrument.id].ask * mockAmount}
          {' '}
          {mockState.selectedInstrument.quote}
        </div>,
        <div className="fees">{`${expectedFee} ${mockState.selectedInstrument.base}`}</div>,
        <div className="net">
          {mockAmount - expectedFee}
          {' '}
          {mockState.selectedInstrument.base}
        </div>,
      ]),
    ).toBe(true);
    expect(wrapper.find('OrderEntry').state().amount).toBe(mockAmount);

    wrapper.find('.place-order-button').simulate('click');
    expect(
      store.isActionDispatched({
        type: types.user.placeOrder,
        order: {
          id: mockState.selectedInstrument.id,
          type: wrapper.find('OrderEntry').state().currentType,
          side: wrapper.find('OrderEntry').state().currentAction,
          quantity: parseFloat(mockAmount),
          timeInForce: advancedOrderTypes[0].value,
          price: 0,
        },
      }),
    ).toBe(true);
    expect(wrapper.find('OrderEntry').state().amount).toBe('');
  });
});
