import React from 'react';
import { createMockStore } from 'redux-test-utils';
import Highcharts from 'highcharts/js/highcharts';
import DepthChart from '../../../src/views/trade-ui/DepthChart';
import types from '../../../src/actions/types';

const mockState = {
  selectedInstrument: {
    id: 'BTCUSD',
    base: 'BTC',
    quote: 'USD',
    quoteDecimals: 5,
    quantityDecimals: 4,
    type: 'crypto',
    quantityIncrement: '0.0001',
    fees: {},
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
};

// Mock Highcharts
const destroyChartMock = jest.fn();
jest.mock('highcharts/js/highcharts');
Highcharts.chart.mockImplementation((container, options) => ({
  series: [
    { baseCurr: null, quoteCurr: null, setData: jest.fn() },
    { baseCurr: null, quoteCurr: null, setData: jest.fn() },
  ],
  destroy: destroyChartMock,
}));

test('<DepthChart/> loads data on mount and renders Highcharts instance', () => {
  const store = createMockStore(mockState);
  const wrapper = mountWithStore(<DepthChart />, store);
  expect(wrapper.containsMatchingElement(<div id="depth-chart">Depth Chart</div>)).toBe(true);
  expect(wrapper.find('DepthChart').props().data.asks).toEqual(mockState.orderbook.asks);
  expect(wrapper.find('DepthChart').props().data.bids).toEqual(mockState.orderbook.bids);
  expect(
    store.isActionDispatched({
      type: types.app.loadL2Data,
      instrument: mockState.selectedInstrument.id,
    }),
  ).toBe(true);
  expect(Highcharts.chart).toHaveBeenCalledTimes(1);
  expect(Highcharts.chart.mock.calls[0]).toMatchSnapshot();
});

test('Chart is destroyed when component unmounts', () => {
  const store = createMockStore(mockState);
  const wrapper = mountWithStore(<DepthChart />, store);
  expect(destroyChartMock).not.toHaveBeenCalled();
  wrapper.unmount();
  expect(destroyChartMock).toHaveBeenCalledTimes(1);
});
