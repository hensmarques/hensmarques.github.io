import React from 'react';
import { FXBlueChart } from '../../../src/views/trade-ui/FXBlueChart';

describe('<FXBlueChart/>', () => {
  // mocks for finding and manipulating chart on document
  const postMessageMock = jest.fn();
  document.getElementById = jest.fn().mockImplementation(id => {
    if (id === 'fxblue-chart') {
      return {
        contentWindow: {
          postMessage: postMessageMock
        }
      };
    }
  });
  const selectedInstrument = {
    id: 'BTCGBP',
    base: 'BTC',
    quote: 'GBP',
    quoteDecimals: 3
  };
  const setFxBlueChartTimeFrame = jest.fn();
  const loadSelectedFxBlueChartTimeFrame = jest.fn();
  const selectedTimeframe = '1Y';
  const propsMock = {
    config: {
      siteName: 'test',
      chartConfig: {
        name: 'oms-d-demo'
      }
    },
    user: 'test',
  }
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FXBlueChart 
      selectedInstrument={selectedInstrument}
      setFxBlueChartTimeFrame={setFxBlueChartTimeFrame}
      loadSelectedFxBlueChartTimeFrame={loadSelectedFxBlueChartTimeFrame}
      {...propsMock}
      />);
  });

  it('renders and matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(loadSelectedFxBlueChartTimeFrame).toHaveBeenCalled();
  });

  it('posts the appropriate message to the chart', () => {
    expect(document.getElementById).toHaveBeenCalledWith('fxblue-chart');
    expect(postMessageMock).toHaveBeenCalledWith(
      { command: 'setChartSymbol', symbol: 'bitfinex@BTCGBP' },
      '*'
    );
  });
});
