import React from 'react';
import { WithdrawCrypto } from '../../../../src/views/simple-ui/my-accounts/WithdrawCrypto';
import { roundTo } from '../../../../src/util/helpers';

describe('<WithdrawCrypto/>', () => {
  const mockProps = {
    currency: { id: 'BTC', name: 'Bitcoin', decimals: 8, withdrawalCommission: '5' },
    exchangeSettings: { withdrawal_2fa_enabled: false },
    withdrawal: { request: 'PENDING' },
  };

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<WithdrawCrypto {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches makeWithdrawal when form is submitted', () => {
    const makeWithdrawal = jest.fn();
    const mockFormData = {
      amount: { value: '5' },
      address: { value: 'sdkjha384109xca902sa' }
    };
    const mockWithdrawData = {
      amount: '5',
      address: 'sdkjha384109xca902sa'
    }
    const feeRate = +(mockProps.currency.withdrawalCommission) / 100;
    let netAmount = +mockWithdrawData.amount / (1 + feeRate);
    netAmount = roundTo(netAmount, mockProps.currency.decimals, 'down');
    const wrapper = shallow(
      <WithdrawCrypto {...mockProps} makeWithdrawal={makeWithdrawal} />
    );
    const instance = wrapper.instance();
    const onSubmitSpy = jest.spyOn(instance, 'onSubmit');
    instance.handleInputChange(mockFormData);
    expect(wrapper.state('withdrawData')).toEqual(mockWithdrawData);
    instance.calculateFee();
    expect(wrapper.state('netAmount')).toBe(netAmount);
    wrapper.find('Connect(FormContainer)').simulate('submit', mockWithdrawData);
    expect(onSubmitSpy).toHaveBeenCalledWith(mockWithdrawData);
    expect(makeWithdrawal).toHaveBeenCalledWith({
      currency_id: mockProps.currency.id,
      ...mockWithdrawData,
      amount: netAmount.toString(),
    });
  });

  it('dispatches withdrawalRequestPending when component unmounts', () => {
    const withdrawalRequestPending = jest.fn();
    const wrapper = shallow(
      <WithdrawCrypto {...mockProps} withdrawalRequestPending={withdrawalRequestPending} />
    );
    wrapper.unmount();
    expect(withdrawalRequestPending).toHaveBeenCalled();
  })
});
