import React from 'react';
import { OpenOrders } from '../../../src/views/trade-ui/OpenOrders';

describe('<OpenOrders/>', () => {
  const mockOrders = [
    {
      id: '4d68233a-fb4d-4f9b-9ab6-0556e1abdd4a',
      status: 'new',
      type: 'limit',
      text: '',
      side: 'buy',
      destination: 'SSHIFTFX',
      properties: null,
      cumulative_quantity: '0',
      remaining_quantity: '0.1',
      average_price: '0',
      receipt_time: 1546875864784,
      security_id: 'BTCGBP',
      quantity: '0.1',
      time_in_force: 'gtc',
      price: '2100',
      expire_time: 0,
      submission_time: null,
      client_order_id: '1bdef5c0-1293-11e9-b961-11b56b6ebd49'
    },
    {
      id: '5253ab84-6f6d-418e-b193-eabe2cf68c2d',
      status: 'new',
      type: 'limit',
      text: '',
      side: 'buy',
      destination: 'SSHIFTFX',
      properties: null,
      cumulative_quantity: '0',
      remaining_quantity: '5',
      average_price: '0',
      receipt_time: 1546575864784,
      security_id: 'ETHBTC',
      quantity: '5',
      time_in_force: 'gtc',
      price: '0.026',
      expire_time: 0,
      submission_time: null,
      client_order_id: '1bdef5c0-1293-11e9-b961-11b56b6ebd49'
    }
  ];
  const tradeUi = {
    dropdownInstrumentSelect: true,
    mobileInitialComponent: 'trade',
    orderTableRows: 10
  };
  const cancelOrder = jest.fn();

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<OpenOrders data={[]} tradeUi={tradeUi} cancelOrder={cancelOrder} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the open orders', () => {
    const wrapper = shallow(
      <OpenOrders data={mockOrders} tradeUi={tradeUi} cancelOrder={cancelOrder} />
    );
    expect(wrapper.find('OrderRow').length).toBe(mockOrders.length);
    expect(wrapper.find('.table-row.orders-row').length).toBe(
      tradeUi.orderTableRows - mockOrders.length
    );
    expect(
      wrapper
        .find('OrderRow')
        .first()
        .props().data
    ).toEqual(mockOrders[0]);
    expect(
      wrapper
        .find('OrderRow')
        .last()
        .props().data
    ).toEqual(mockOrders[1]);
  });

  it('navigates to a new page through pagination', () => {
    const wrapper = shallow(
      <OpenOrders data={mockOrders} tradeUi={tradeUi} cancelOrder={cancelOrder} />
    );
    const setPageSpy = jest.spyOn(wrapper.instance(), 'setPage');
    wrapper.instance().forceUpdate();

    expect(wrapper.state().page).toBe(1);
    expect(setPageSpy).not.toHaveBeenCalled();

    const mockPage = 2;
    wrapper
      .find('Paginator')
      .props()
      .setPage(mockPage);
    expect(wrapper.state().page).toBe(mockPage);
    expect(setPageSpy).toHaveBeenCalledWith(mockPage);
  });

  it('dispatches cancelOrder when user cancels an open order', () => {
    const wrapper = shallow(
      <OpenOrders data={[mockOrders[0]]} tradeUi={tradeUi} cancelOrder={cancelOrder} />
    );
    expect(cancelOrder).not.toHaveBeenCalled();
    wrapper
      .find('OrderRow')
      .props()
      .cancelOrder();
    expect(cancelOrder).toHaveBeenCalled();
  });
});
