import React from 'react';
import { WithdrawStatus } from '../../../src/views/trade-ui/WithdrawStatus';

describe('<WithdrawStatus/>', () => {
  const mockData = [
    {
      account: '5253ab84-6f6d-418e-b193-eabe2cf68c2d',
      product: 'BTC',
      amount: '1',
      status: 'rejected',
      created: '01/01/2019'
    },
    {
      account: '01081297-c709-4b4b-8d5e-f20a315adbad',
      product: 'USD',
      amount: '1200',
      status: 'pending',
      created: '01/05/2019'
    },
    {
      account: '70d08ed1-b37f-440d-8c83-282bc6d22f9d',
      product: 'USD',
      amount: '999',
      status: 'pending',
      created: '01/06/2019'
    }
  ];
  const tradeUi = {
    dropdownInstrumentSelect: true,
    mobileInitialComponent: 'trade',
    orderTableRows: 10
  };

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<WithdrawStatus data={[]} tradeUi={tradeUi} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the withdrawal data', () => {
    const wrapper = shallow(<WithdrawStatus data={mockData} tradeUi={tradeUi} />);
    expect(wrapper.find('OrderRow').length).toBe(mockData.length);
    expect(wrapper.find('.inactive-orders-row').length).toBe(
      tradeUi.orderTableRows - mockData.length
    );
    expect(
      wrapper
        .find('OrderRow')
        .first()
        .props().data
    ).toEqual(mockData[0]);
    expect(
      wrapper
        .find('OrderRow')
        .last()
        .props().data
    ).toEqual(mockData[2]);
  });

  xit('navigates to a new page through pagination', () => {
    const moreData = [...mockData, ...mockData, ...mockData, ...mockData];
    const wrapper = shallow(<WithdrawStatus data={moreData} tradeUi={tradeUi} />);
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
