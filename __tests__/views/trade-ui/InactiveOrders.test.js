import React from 'react';
import { InactiveOrders } from '../../../src/views/trade-ui/InactiveOrders';

describe('<InactiveOrders/>', () => {
  const mockOrders = [
    {
      order_id: '5253ab84-6f6d-418e-b193-eabe2cf68c2d',
      security_id: 'BTCUSD',
      order_side: 'buy',
      order_status: 'rejected',
      reason: 'Insufficient funds for order BUY submission.',
      timestamp: 1544000000
    },
    {
      order_id: '01081297-c709-4b4b-8d5e-f20a315adbad',
      security_id: 'BTCGBP',
      order_side: 'buy',
      order_status: 'rejected',
      reason: '0 quantity less than minimum allowed 0.01',
      timestamp: 1543000000
    },
    {
      order_id: '70d08ed1-b37f-440d-8c83-282bc6d22f9d',
      security_id: 'LTCUSD',
      order_side: 'sell',
      order_status: 'rejected',
      reason: '0 quantity less than minimum allowed 1',
      timestamp: 1542000000
    }
  ];
  const tradeUi = {
    dropdownInstrumentSelect: true,
    mobileInitialComponent: 'trade',
    orderTableRows: 10
  };

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<InactiveOrders data={[]} tradeUi={tradeUi} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the inactive orders', () => {
    const wrapper = shallow(<InactiveOrders data={mockOrders} tradeUi={tradeUi} />);
    expect(wrapper.find('OrderRow').length).toBe(mockOrders.length);
    expect(wrapper.find('.inactive-orders-row').length).toBe(
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
    ).toEqual(mockOrders[2]);
  });

  it('navigates to a new page through pagination', () => {
    const wrapper = shallow(<InactiveOrders data={mockOrders} tradeUi={tradeUi} />);
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
});
