import React from 'react';
import { BuySellModal } from '../../../../src/views/simple-ui/buy-sell/BuySellModal';
import { getFee } from '../../../../src/util/helpers';

const mockStateToProps = {
  base: 'BTC',
  quote: 'USD',
  products: {},
  selectedInstrument: {
    id: 'BTCUSD',
    base: 'BTC',
    quote: 'USD',
    quoteDecimals: 5,
    quantityDecimals: 4,
    type: 'crypto',
    quantityIncrement: '0.0001',
    fees: {
      buy: {
        method: 'quantity_percent',
        maker: '0.125',
        taker: '0.125',
      },
      sell: {
        method: 'quantity_percent',
        maker: '0.125',
        taker: '0.125',
      },
    },
  },
  selectedBidAsk: {
    bid: '3990',
    ask: '4000',
  },
  balances: {},
  placeOrder: jest.fn(),
  orderStatus: { status: null, message: null },
};

const mockProps = {
  amount: 4000,
  quantity: 1,
  onClose: jest.fn(),
  transactionType: 'buy',
};

test('user is presented with details about their order and can place the order', () => {
  const wrapper = shallow(<BuySellModal {...mockProps} {...mockStateToProps} />);
  const expectedFee = getFee(
    mockProps.quantity,
    mockProps.transactionType,
    mockStateToProps.selectedInstrument.fees,
  );
  expect(wrapper.state().workflowStep).toBe('placeOrder');
  expect(
    wrapper.containsAllMatchingElements([
      <h1 className="buy-sell-modal-title">Confirm Order</h1>,
      <p>{`You are about to buy ${mockStateToProps.base} at the price below`}</p>,
      <li>
        {`Total Cost (${mockStateToProps.quote})`}
        <span>{mockProps.amount}</span>
      </li>,
      <li>
        {`Total Received (${mockStateToProps.base})`}
        <span>{mockProps.quantity}</span>
      </li>,
      <li>
        {`Transaction Fees (${mockStateToProps.base})`}
        <span>{expectedFee}</span>
      </li>,
      <li>
        {`Net Amount Received (${mockStateToProps.base})`}
        <span>{mockProps.quantity - expectedFee}</span>
      </li>,
    ]),
  ).toBe(true);

  expect(mockStateToProps.placeOrder).not.toHaveBeenCalled();
  wrapper.find('Button').simulate('click');
  expect(mockStateToProps.placeOrder).toHaveBeenCalledTimes(1);
  expect(mockStateToProps.placeOrder).toHaveBeenCalledWith({
    id: mockStateToProps.selectedInstrument.id,
    type: 'market',
    side: mockProps.transactionType,
    quantity: mockProps.quantity,
    timeInForce: 'gtc',
    price: 0,
  });
});

describe('feedback messages', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BuySellModal {...mockProps} {...mockStateToProps} />);
  });

  test('user is presented with a pending order message', () => {
    wrapper.setProps({ orderStatus: { status: 'pending', message: null } });
    expect(wrapper.state().workflowStep).toBe('orderPending');
    expect(wrapper.find('.buy-sell-modal-wrapper').text()).toMatch(
      /your order was placed with status pending/i,
    );
  });

  test('user is presented with an accepted order message', () => {
    wrapper.setProps({ orderStatus: { status: 'accepted', message: null } });
    expect(wrapper.state().workflowStep).toBe('orderAccepted');
    expect(wrapper.find('.buy-sell-modal-wrapper').text()).toMatch(
      /your order was successfully placed/i,
    );
  });

  test('user is presented with a rejected order message', () => {
    const mockOrderStatus = {
      status: 'rejected',
      message: '0.000001 quantity less than minimum allowed 0.0001',
    };
    wrapper.setProps({ orderStatus: mockOrderStatus });
    expect(wrapper.state().workflowStep).toBe('orderRejected');
    expect(wrapper.find('.buy-sell-modal-wrapper').text()).toMatch(
      /there was an error placing your order/i,
    );
    expect(wrapper.find('.buy-sell-modal-wrapper').text()).toMatch(mockOrderStatus.message);
  });

  test('user is presented with a rejected order message about insufficient funds', () => {
    const mockOrderStatus = {
      status: 'rejected',
      message: 'Insufficient funds for order',
    };
    wrapper.setProps({ orderStatus: mockOrderStatus });
    expect(wrapper.state().workflowStep).toBe('orderRejected');
    expect(wrapper.find('.buy-sell-modal-wrapper').text()).toMatch(
      /there was an error placing your order/i,
    );
    expect(wrapper.find('.buy-sell-modal-wrapper').text()).toMatch(
      /you have insufficient funds to complete this transaction/i,
    );
  });

  test('onClose prop is fired when user clicks close modal button', () => {
    wrapper.setProps({ orderStatus: { status: 'accepted', message: null } });
    expect(mockProps.onClose).not.toHaveBeenCalled();
    wrapper.find('Button').simulate('click');
    expect(mockProps.onClose).toHaveBeenCalledTimes(1);
  });
});
