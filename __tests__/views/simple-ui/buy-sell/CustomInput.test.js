import React from 'react';
import { CustomInput } from '../../../../src/views/simple-ui/buy-sell/CustomInput';

describe('<CustomInput/>', () => {
  const mockProps = {
    selectedInstrument: {
      base: 'BTC',
      quote: 'USD'
    },
    basevalue: 1,
    quotevalue: 3000,
    transactionType: 'buy'
  };
  const translationSpy = jest.spyOn(window, '_t');

  it('renders the custom input component for a buy transaction and matches the snapshot', () => {
    const wrapper = shallow(<CustomInput {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the custom input component for a sell transaction and matches the snapshot', () => {
    mockProps.transactionType = 'sell';
    const wrapper = shallow(<CustomInput {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles translations', () => {
    expect(translationSpy).toHaveBeenCalledWith('Select Amount to {action}', 'BUY_SELL_CUSTOM.SELECT_TITLE', {action: ' buy'});
    expect(translationSpy).toHaveBeenCalledWith('buy', 'BUY_SELL_CUSTOM.BUY');
    expect(translationSpy).toHaveBeenCalledWith(
      'Enter the amount of {base} you wish to {action}. You may enter the amount either directly in {base} units, or in the equivalent amount of {quote}.',
      'BUY_SELL_CUSTOM.AMOUNT_TEXT_TWO',
      { base: 'BTC', quote: 'USD', action: ' buy' }
    );
    expect(translationSpy).toHaveBeenCalledWith('Select Amount to {action}', 'BUY_SELL_CUSTOM.SELECT_TITLE', {action: ' sell'});
    expect(translationSpy).toHaveBeenCalledWith('sell', 'BUY_SELL_CUSTOM.SELL');
    expect(translationSpy).toHaveBeenCalledWith(
      'Enter the amount of {base} you wish to {action}. You may enter the amount either directly in {base} units, or in the equivalent amount of {quote}.',
      'BUY_SELL_CUSTOM.AMOUNT_TEXT_TWO',
      { base: 'BTC', quote: 'USD', action: ' sell' }
    );
  });
});
