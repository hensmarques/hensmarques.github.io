import React from 'react';
import { WithdrawFiat } from '../../../../src/views/simple-ui/my-accounts/WithdrawFiat';

describe('<WithdrawFiat/>', () => {
  const mockProps = {
    exchangeSettings: {},
    withdrawal: { request: 'PENDING' },
    currency: {
      id: 'BTC',
    }
  };

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<WithdrawFiat {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches makeWithdrawal when form is submitted', () => {
    const makeWithdrawal = jest.fn();
    const mockCurrency = { id: 'USD' };
    const mockFormData = {
      amount: '5',
      // bankName: 'bank',
      // accountNumber: '123456',
      // swift: '123456',
      verificationCode: '123456'
    };
    const wrapper = shallow(
      <WithdrawFiat
        {...mockProps}
        currency={mockCurrency}
        makeWithdrawal={makeWithdrawal}
      />
    );
    const onSubmitSpy = jest.spyOn(wrapper.instance(), 'onSubmit');
    wrapper.instance().forceUpdate();
    wrapper.find('Connect(FormContainer)').simulate('submit', mockFormData);
    expect(onSubmitSpy).toHaveBeenCalledWith(mockFormData);
    expect(makeWithdrawal).toHaveBeenCalledWith({
      amount: mockFormData.amount,
      currency_id: mockCurrency.id,
      code: mockFormData.verificationCode
    });
  });

  it("dispatches showModal('none') when modal closes", () => {
    const showModal = jest.fn();
    const wrapper = shallow(
      <WithdrawFiat {...mockProps} showModal={showModal} />
    );
    wrapper
      .find('Connect(FormContainer)')
      .props()
      .buttons[0]['onClick']();
    expect(showModal).toHaveBeenCalledWith('none');
  });
});
