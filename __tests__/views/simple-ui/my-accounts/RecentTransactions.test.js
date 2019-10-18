import React from 'react';
import { RecentTransactions } from '../../../../src/views/simple-ui/my-accounts/RecentTransactions';
import { capitalize, getFormattedDate, floor } from '../../../../src/util/helpers';

const mockData = [
  {
    type: "trade",
    reason: null,
    timestamp: 1564669514807,
    id: "USD-4",
    destination: "SSHIFTFX",
    properties: null,
    sequence_number: 4,
    security_id: "BTCUSD",
    client_order_id: null,
    quantity: "0.0099",
    time_in_force: null,
    price: null,
    expire_time: 0,
    remaining_quantity: "0",
    average_price: "10010.25",
    order_id: "d056cac7-e752-4d75-9f72-d7e4a1bd5dca",
    cumulative_quantity: "0.0099",
    order_type: "market",
    order_side: "buy",
    order_status: "completely_filled",
    original_client_order_id: null,
    trade_quantity: "0.0099",
    trade_price: "10010.25",
    is_agressor: null,
  },
];
const mockProps = {
  instruments: {
    BTCUSD: {
      id: "BTCUSD",
      base: "BTC",
      quote: "USD",
      quoteDecimals: 5,
      quantityDecimals: 4,
      type: "crypto",
      quantityIncrement: "0.0001",
      fees: {
        buy: {
          method: "quantity_percent",
          maker: "0.125",
          taker: "0.125",
        },
        sell: {
          method: "quantity_percent",
          maker: "0.125",
          taker: "0.125",
        }
      }
    },
  },
  rowsPerPage: 10,
  dateFormat: 'MM-DD-YYYY',
  timeFormat: '12hr',
  loadData: jest.fn()
};

describe('<RecentTransactions/>', () => {
  it('renders, dispatches loadData on mount, and matches the snapshot', () => {
    const props = { ...mockProps, data: [] };
    const wrapper = shallow(<RecentTransactions {...props} />);
    expect(mockProps.loadData).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with data', () => {
    const props = { ...mockProps, data: mockData };
    const wrapper = shallow(<RecentTransactions {...props} />);
    const mockOrder = mockData[0];
    const decimals = mockProps.instruments[mockOrder.security_id].quoteDecimals;
    expect(wrapper.find('.empty').length).toBe(mockProps.rowsPerPage - mockData.length);
    expect(wrapper.find('.order-id').props().children).toBe(mockOrder.order_id);
    expect(wrapper.find('.pair').props().children).toBe(mockOrder.security_id);
    expect(wrapper.find('.side').props().children).toBe(capitalize(mockOrder.order_side));
    expect(wrapper.find('.size').props().children).toBe(mockOrder.quantity);
    expect(wrapper.find('.price').props().children).toBe(floor((+mockOrder.trade_price), decimals));
    expect(wrapper.find('.total').props().children).toBe(
      floor((mockOrder.trade_price * mockOrder.trade_quantity), decimals)
    );
    expect(wrapper.find('.time').props().children).toBe(
      getFormattedDate(mockOrder.timestamp)
    );
  });

  it('handles pagination when the number of orders is greater than rowsPerPage', () => {
    const moreMockData = new Array(15).fill(mockData[0]);
    const props = { ...mockProps, data: moreMockData };
    const wrapper = shallow(<RecentTransactions {...props} />);
    expect(wrapper.state()).toEqual({ page: 1 });
    expect(wrapper.find('Paginator').props().currentPage).toBe(1);
    expect(wrapper.find('Paginator').props().numItems).toBe(moreMockData.length);
    expect(wrapper.find('Paginator').props().itemsPerPage).toBe(mockProps.rowsPerPage);
    wrapper
      .find('Paginator')
      .props()
      .setPage(2);
    expect(wrapper.state()).toEqual({ page: 2 });
    expect(wrapper.find('Paginator').props().currentPage).toBe(2);
  });
});
