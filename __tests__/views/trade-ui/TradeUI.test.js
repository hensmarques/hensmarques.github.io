import React from 'react';
import { TradeUI } from '../../../src/views/trade-ui/TradeUI';

describe('<TradeUI/>', () => {
  const tradeUi = {
    dropdownInstrumentSelect: true,
    mobileInitialComponent: 'trade',
    orderTableRows: 10,
  };
  const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
  const loadTickers = jest.fn();
  const loadData = jest.fn();
  const orderEventsFinished = jest.fn();
  let wrapper;

  describe('Basics', () => {
    beforeEach(() => {
      wrapper = shallow(
        <TradeUI
          loadTickers={loadTickers}
          loadData={loadData}
          orderEventsFinished={orderEventsFinished}
          tradeUi={tradeUi}
        />,
      );
    });

    it('fires loadData, loadTickers and adds a resize window event listener on mount', () => {
      const checkResolutionFunc = wrapper.instance().checkResolution;
      expect(loadData).toHaveBeenCalledTimes(1);
      expect(loadTickers).toHaveBeenCalledTimes(1);
      expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
      expect(addEventListenerSpy).toHaveBeenCalledWith('resize', checkResolutionFunc);
    });

    it('renders and matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('fires orderEventsFinished callback when component unmounts', () => {
      wrapper.unmount();
      expect(orderEventsFinished).toHaveBeenCalledTimes(1);
      expect(orderEventsFinished).toHaveBeenCalledWith(false);
    });
  });

  describe('Alternative UI rendering', () => {
    it('renders with a maintenance message', () => {
      wrapper = shallow(
        <TradeUI
          loadTickers={loadTickers}
          loadData={loadData}
          orderEventsFinished={orderEventsFinished}
          tradeUi={tradeUi}
          isMaintenanceMessageEnabled
        />,
      );
      expect(wrapper.find('Connect(MaintenanceMessage)').exists()).toBe(true);
      expect(wrapper.find('Connect(MaintenanceMessage)').props().pageType).toBe('trade-ui');
    });

    it('renders with 3 columns', () => {
      global.window.innerWidth = 1100;
      wrapper = shallow(
        <TradeUI
          loadTickers={loadTickers}
          loadData={loadData}
          orderEventsFinished={orderEventsFinished}
          tradeUi={tradeUi}
        />,
      );
      expect(wrapper.state().currentUI).toBe('desktop');
      expect(wrapper.state().columns).toBe(3);
    });

    it('renders the mobile UI', () => {
      global.window.innerWidth = 500;
      wrapper = shallow(
        <TradeUI
          loadTickers={loadTickers}
          loadData={loadData}
          orderEventsFinished={orderEventsFinished}
          tradeUi={tradeUi}
        />,
      );
      expect(wrapper.find('.trade-ui').exists()).toBe(false);
      expect(wrapper.find('.mobile-trade-ui').exists()).toBe(true);
      expect(wrapper.find('Connect(MobileUIContainer)').exists()).toBe(true);
      expect(wrapper.state().currentUI).toBe('mobile');
    });
  });
});
