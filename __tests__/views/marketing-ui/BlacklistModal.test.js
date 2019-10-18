import React from 'react';
import BlacklistModal from '../../../src/views/marketing-ui/BlacklistModal';

describe('<BlacklistModal/>', () => {
  const mockOnClose = jest.fn();
  let translationSpy;
  let wrapper;

  beforeEach(() => {
    translationSpy = jest.spyOn(window, '_t').mockClear();
    wrapper = shallow(<BlacklistModal onClose={mockOnClose} />);
  });

  it('renders and matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Button').props().onClick).toBe(mockOnClose);
  });

  it('handles translations', () => {
    expect(translationSpy).toHaveBeenCalledWith(
      'Cointrader is not available in your country.',
      'BLACKLIST.MESSAGE'
    );
    expect(translationSpy).toHaveBeenCalledWith('OK', 'BLACKLIST.OK');
  });
});
