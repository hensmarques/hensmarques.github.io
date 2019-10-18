import React from 'react';
import { Deposit } from '../../../../src/views/simple-ui/my-accounts/Deposit';

describe('<Deposit/>', () => {
  const mockDeposit = {
    status: null
  };

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Deposit deposit={mockDeposit} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('updates state when TextInput value changes', () => {
    const wrapper = shallow(<Deposit deposit={mockDeposit} />);
    expect(wrapper.state()).toEqual({ amount: '' });
    const mockEvent = { target: { value: '5' } };
    wrapper.find('TextInput').simulate('change', mockEvent);
    expect(wrapper.state()).toEqual({ amount: mockEvent.target.value });
  });

  it('dispatches makeDeposit when form is submitted', () => {
    const makeDeposit = jest.fn();
    const mockCurrency = 'BTC';
    const mockAmount = '5';
    const wrapper = shallow(
      <Deposit deposit={mockDeposit} currency={mockCurrency} makeDeposit={makeDeposit} />
    );
    const depositSpy = jest.spyOn(wrapper.instance(), 'deposit');
    wrapper.instance().forceUpdate();
    wrapper.setState({ amount: mockAmount });
    wrapper.find('Form').simulate('submit');
    expect(depositSpy).toHaveBeenCalled();
    expect(makeDeposit).toHaveBeenCalledWith(mockCurrency, mockAmount);
  });

  describe('Success flow', () => {
    const mockAcceptedDeposit = {
      status: 'accepted'
    };
    const onClose = jest.fn();
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Deposit deposit={mockAcceptedDeposit} onClose={onClose} />);
    });

    it('renders a success message', () => {
      expect(
        wrapper.containsMatchingElement(
          <div className="success-message">
            <p>Your deposit ticket has been successfully submitted.</p>
          </div>
        )
      ).toBe(true);
    });

    it('fires onClose prop when Close button is clicked', () => {
      expect(onClose).not.toHaveBeenCalled();
      wrapper.find('Button').simulate('click');
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('Error flow', () => {
    const mockRejectedDeposit = {
      status: 'rejected',
      statusCode: 'verification_code_mandatory'
    };

    it('renders a 2FA error message', () => {
      const wrapper = shallow(<Deposit deposit={mockRejectedDeposit} />);
      expect(wrapper.find('p').text()).toBe(
        '2-Factor Authentication is required to make a deposit. <Link />'
      );
      expect(wrapper.find('.action-buttons').exists()).toBe(true);
    });

    // it('dispatches setDepositReady when "Turn on 2FA" action button is clicked', () => {
    //   const setDepositReady = jest.fn();
    //   const mockHistory = [];
    //   const wrapper = shallow(
    //     <Deposit
    //       deposit={mockRejectedDeposit}
    //       setDepositReady={setDepositReady}
    //       history={mockHistory}
    //     />
    //   );
    //   expect(setDepositReady).not.toHaveBeenCalled();
    //   wrapper
    //     .find('Button')
    //     .first()
    //     .simulate('click');
    //   expect(setDepositReady).toHaveBeenCalled();
    //   expect(mockHistory).toEqual(['/settings']);
    // });

    // it('renders a general error message', () => {
    //   mockRejectedDeposit.statusCode = null;
    //   const wrapper = shallow(<Deposit deposit={mockRejectedDeposit} />);
    //   expect(
    //     wrapper.containsMatchingElement(
    //       <div className="error-message">
    //         <p>There was an error with your deposit, please try again.</p>
    //       </div>
    //     )
    //   ).toBe(true);
    // });
  });
});
