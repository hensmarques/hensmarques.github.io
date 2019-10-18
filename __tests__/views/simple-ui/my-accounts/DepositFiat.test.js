import React from 'react';
import { DepositFiat } from '../../../../src/views/simple-ui/my-accounts/DepositFiat';

describe('<DepositFiat/>', () => {
  const mockProps = {
    deposit: { request: 'PENDING' }
  };

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<DepositFiat {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches makeDeposit when form is submitted', () => {
    const makeDeposit = jest.fn();
    const mockCurrency = { id: 'BTC' };
    const mockFormData = { fullName: 'foobar', amount: '5', memo: 'biz' };
    const wrapper = shallow(
      <DepositFiat
        {...mockProps}
        currency={mockCurrency}
        makeDeposit={makeDeposit}
      />
    );
    const onSubmitSpy = jest.spyOn(wrapper.instance(), 'onSubmit');
    wrapper.instance().forceUpdate();
    wrapper.find('Connect(FormContainer)').simulate('submit', mockFormData);
    expect(onSubmitSpy).toHaveBeenCalledWith(mockFormData);
    expect(makeDeposit).toHaveBeenCalledWith(
      mockCurrency.id,
      mockFormData.amount
    );
  });

  it("dispatches showModal('none') when modal closes", () => {
    const showModal = jest.fn();
    const wrapper = shallow(
      <DepositFiat {...mockProps} showModal={showModal} />
    );
    wrapper
      .find('Connect(FormContainer)')
      .props()
      .buttons[0]['onClick']();
    expect(showModal).toHaveBeenCalledWith('none');
  });
});
