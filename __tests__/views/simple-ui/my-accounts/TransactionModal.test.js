import React from 'react';
import { TransactionModal } from '../../../../src/views/simple-ui/my-accounts/TransactionModal';

describe('<TransactionModal/>', () => {
  const mockCurrency = {
    id: 'BTC',
    type: 'crypto',
  };
  const loadUserSettings = jest.fn();

  it('renders with transactionType deposit and matches the snapshot', () => {
    const wrapper = shallow(
      <TransactionModal
        currency={mockCurrency}
        loadUserSettings={loadUserSettings}
        transactionType="deposit"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with transactionType withdraw', () => {
    const wrapper = shallow(
      <TransactionModal
        currency={mockCurrency}
        loadUserSettings={loadUserSettings}
        transactionType="withdraw"
      />,
    );
  });

  it("dispatches showModal('none') when modal closes", () => {
    const showModal = jest.fn();
    const wrapper = shallow(
      <TransactionModal
        currency={mockCurrency}
        loadUserSettings={loadUserSettings}
        showModal={showModal}
        transactionType="deposit"
      />,
    );
    wrapper
      .find('Connect(Modal)')
      .props()
      .onClose();
    expect(showModal).toHaveBeenCalledWith('none');
  });
});
