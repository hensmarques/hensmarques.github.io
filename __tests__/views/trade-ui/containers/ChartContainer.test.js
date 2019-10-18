import React from 'react';
import ChartContainer from '../../../../src/views/trade-ui/containers/ChartContainer';
import config from '../../../../config/config';

jest.mock('../../../../config/config');

test('FXBlue chart renders', () => {
  config.chartConfig.candleStickChart = 'FXBLUE';
  const wrapper = shallow(<ChartContainer />);
  expect(wrapper.find('Connect(TVWithExternalData)').exists()).toBe(false);
  expect(wrapper.find('Connect(TVWithExchangeData)').exists()).toBe(false);
  expect(wrapper.find('Connect(DepthChart)').exists()).toBe(true);
  expect(wrapper.find('Connect(FXBlueChart)').exists()).toBe(true);
});

test('TradingView chart with external data renders', () => {
  config.chartConfig.candleStickChart = 'TV_EXTERNAL_DATA';
  const wrapper = shallow(<ChartContainer />);
  expect(wrapper.find('Connect(FXBlueChart)').exists()).toBe(false);
  expect(wrapper.find('Connect(TVWithExchangeData)').exists()).toBe(false);
  expect(wrapper.find('Connect(DepthChart)').exists()).toBe(true);
  expect(wrapper.find('Connect(TVWithExternalData)').exists()).toBe(true);
});

test('TradingView chart with exchange data renders', () => {
  config.chartConfig.candleStickChart = 'TV_EXCHANGE_DATA';
  const wrapper = shallow(<ChartContainer />);
  expect(wrapper.find('Connect(FXBlueChart)').exists()).toBe(false);
  expect(wrapper.find('Connect(TVWithExternalData)').exists()).toBe(false);
  expect(wrapper.find('Connect(DepthChart)').exists()).toBe(true);
  expect(wrapper.find('Connect(TVWithExchangeData)').exists()).toBe(true);
});

test('TradingView chart with external data renders by default', () => {
  config.chartConfig.candleStickChart = null;
  const wrapper = shallow(<ChartContainer />);
  expect(wrapper.find('Connect(FXBlueChart)').exists()).toBe(false);
  expect(wrapper.find('Connect(TVWithExchangeData)').exists()).toBe(false);
  expect(wrapper.find('Connect(DepthChart)').exists()).toBe(true);
  expect(wrapper.find('Connect(TVWithExternalData)').exists()).toBe(true);
});
