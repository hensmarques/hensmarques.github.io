import React from 'react';
import { Withdraw } from '../../../../src/views/simple-ui/my-accounts/Withdraw';

describe('<Withdraw/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Withdraw />);
    expect(wrapper).toMatchSnapshot();
  });

  it('updates state when TextInput values change', () => {
    const wrapper = shallow(<Withdraw />);
    expect(wrapper.state()).toEqual({ amount: '', address: '' });
    const mockEventAmount = { target: { value: '5' } };
    const mockEventAddress = { target: { value: '1FCMHSWjy6cWPVoKQ5YM7FgY9C2XuMcMQf' } };
    wrapper.find({ name: 'Amount' }).simulate('change', mockEventAmount);
    wrapper.find({ name: 'Address' }).simulate('change', mockEventAddress);
    expect(wrapper.state()).toEqual({
      amount: mockEventAmount.target.value,
      address: mockEventAddress.target.value
    });
  });

  xit('dispatches makeWithdrawal when form is submitted', () => {
    const makeWithdrawal = jest.fn();
    const mockCurrency = 'BTC';
    const mockAmount = '5';
    const mockAddress = '1FCMHSWjy6cWPVoKQ5YM7FgY9C2XuMcMQf';
    const wrapper = shallow(<Withdraw currency={mockCurrency} makeWithdrawal={makeWithdrawal} />);
    const withdrawSpy = jest.spyOn(wrapper.instance(), 'withdraw');
    wrapper.instance().forceUpdate();
    wrapper.setState({ amount: mockAmount, address: mockAddress });
    wrapper.find('Form').simulate('submit');
    expect(withdrawSpy).toHaveBeenCalled();
    expect(makeWithdrawal).toHaveBeenCalledWith({
      currency_id: mockCurrency,
      amount: mockAmount,
      address: mockAddress
    });
  });
});
