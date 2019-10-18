import React from 'react';
import BuySellOption from '../../../../src/views/simple-ui/buy-sell/BuySellOption';

describe('<BuySellOption/>', () => {
  const mockProps = {
    amount: 10,
    baseCurrency: 'BTC',
    quantity: '10',
    quoteCurrency: 'USD',
    transactionType: 'buy'
  };

  it('renders with default props and matches the snapshot', () => {
    const wrapper = shallow(<BuySellOption  {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the props correctly', () => {
    const wrapper = shallow(<BuySellOption {...mockProps} />);
    expect(wrapper.containsAllMatchingElements([
      <div className="quantity-container">
        <div className="transaction-type">{mockProps.transactionType}</div>
        <div>{'~' + mockProps.quantity}</div>
        <div>{mockProps.baseCurrency}</div>
      </div>,
      <div className="amount">
        <div>{`$${mockProps.amount}`}</div>
        <div>{mockProps.quoteCurrency}</div>
      </div>
    ])).toBe(true);
  });

  it('renders and hides the BuySellModal', () => {
    const wrapper = shallow(<BuySellOption {...mockProps} />);
    expect(wrapper.state().modal).toBe(false);
    expect(wrapper.find('Connect(BuySellModal)').exists()).toBe(false);
    
    wrapper.find('Button').simulate('click');
    expect(wrapper.state().modal).toBe(true);
    expect(wrapper.find('Connect(BuySellModal)').exists()).toBe(true);
    
    const closeModalSpy = jest.spyOn(wrapper.instance(), 'closeModal');
    wrapper.instance().forceUpdate();
    expect(closeModalSpy).not.toHaveBeenCalled();
    const modal = wrapper.find('Connect(BuySellModal)');
    expect(modal.props().amount).toBe(mockProps.amount);
    expect(modal.props().transactionType).toBe(mockProps.transactionType);
    
    modal.props().onClose();
    expect(wrapper.state().modal).toBe(false);
    expect(wrapper.find('Connect(BuySellModal)').exists()).toBe(false);
    expect(closeModalSpy).toHaveBeenCalled();
  });
});
