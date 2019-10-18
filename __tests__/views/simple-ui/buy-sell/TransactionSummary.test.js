import React from 'react';
import { TransactionSummary } from '../../../../src/views/simple-ui/buy-sell/TransactionSummary';

describe('<TransactionSummary/>', () => {
  const mockProps = {
    selectedInstrument: {
      base: 'BTC',
      quote: 'USD'
    },
    basevalue: 1,
    quotevalue: 3000,
    transactionType: 'buy',
    fee: 0.00150000,
    products: {
      BTC: {
        precision: 8
      },
      USD: {
        precision: 2
      }
    }
  };

  it('renders a buy transaction summary and matches the snapshot', () => {
    const wrapper = shallow(<TransactionSummary {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a sell transaction summary and matches the snapshot', () => {
    mockProps.transactionType = 'sell';
    const wrapper = shallow(<TransactionSummary {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles translations', () => {
    const translationSpy = jest.spyOn(window, '_t').mockClear();
    const wrapper = shallow(<TransactionSummary {...mockProps} />);
    expect(translationSpy).toHaveBeenCalledWith(
      'Transaction Summary',
      'BUY_SELL_CUSTOM.TRANS_TITLE'
    );
    expect(translationSpy).toHaveBeenCalledWith(
      'Total Amount ≈',
      'BUY_SELL_CUSTOM.TRANS_TOTAL'
    );
    expect(translationSpy).toHaveBeenCalledWith(
      'Transaction Fee ≈',
      'BUY_SELL_CUSTOM.TRANS_FEE'
    );
    expect(translationSpy).toHaveBeenCalledWith(
      'Net Amount Received ≈',
      'BUY_SELL_CUSTOM.TRANS_NET_AMOUNT'
    );
  });
});
