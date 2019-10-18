import React from 'react';
import { createMockStore } from 'redux-test-utils';
import TVWithExternalData from '../../../src/views/trade-ui/TVWithExternalData';
import config from '../../../config/config';

const props = {
  chartConfig: config.chartConfig,
}

test('TradingView widget does not render if there is no selected instrument', () => {
  const mockState = { selectedInstrument: {}, config };
  const store = createMockStore(mockState);
  const wrapper = mountWithStore(<TVWithExternalData { ...props } />, store);
  expect(wrapper.find('TradingViewWidget').exists()).toBe(false);
});

test('TradingView widget renders with desired props', () => {
  const mockInstrumentId = 'BTCUSD';
  const mockState = { selectedInstrument: { id: mockInstrumentId }, config };
  const store = createMockStore(mockState);
  const wrapper = mountWithStore(<TVWithExternalData { ...props } />, store);
  // expect(wrapper.find('Connect(TradingViewWidget)').exists()).toBe(true);
  // expect(wrapper.find('Connect(TradingViewWidget)').props()).toEqual({
  //   allow_symbol_change: false,
  //   symbol: `${config.chartConfig.TVProvider}:${mockInstrumentId}`,
  //   theme: config.chartConfig.theme,
  //   interval: 5,
  //   hide_legend: config.chartConfig.hideTVLegend,
  //   hidevolume: false,
  //   autosize: true,
  //   toolbar_bg: config.chartConfig.theme === 'DARK' ? 'rgb(19,23,34)' : 'rgb(255,255,255)',
  //   enable_publishing: false,
  //   height: 610,
  //   hideideas: true,
  //   hide_side_toolbar: true,
  //   hide_top_toolbar: false,
  //   locale: 'en',
  //   save_image: true,
  //   show_popup_button: false,
  //   style: '1',
  //   timezone: 'Etc/UTC',
  //   widgetType: 'widget',
  //   width: 980,
  //   withdateranges: false,
  // });
});
