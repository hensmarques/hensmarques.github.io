import React from 'react';
import { CurrentBalances } from '../../../../src/views/simple-ui/my-accounts/CurrentBalances';

describe('<CurrentBalances/>', () => {
  const loadAccounts = jest.fn();
  const mockProps = {
    balances: {
      USD: {
        total: '5540.87',
        trading: '5540.87',
        withdrawal: '3000.00',
      },
      BTC: {
        total: '0',
        trading: '0',
        withdrawal: '0',
      },
    },
    products: {
      USD: {
        balance: 10000,
        decimals: 2,
        hold: 0,
        id: 'USD',
        precision: 8,
        type: 'fiat',
      },
      BTC: {
        balance: 3,
        decimals: 8,
        hold: 0,
        id: 'BTC',
        precision: 8,
        type: 'crypto',
      },
      XRP: {
        balance: 0,
        decimals: 6,
        hold: 0,
        id: 'XRP',
        precision: 8,
        type: 'crypto',
      },
    },
    rowsPerPage: 8,
    excludeDeposit: [],
    excludeWithdraw: [],
    loadAccounts,
  };

  describe('Rendering of balances table', () => {
    it('renders without crashing and loads accounts on mount', () => {
      shallow(<CurrentBalances balances={{}} products={{}} loadAccounts={loadAccounts} />);
      expect(loadAccounts).toHaveBeenCalledTimes(1);
    });

    it('renders with data and matches the snapshot', () => {
      const wrapper = shallow(<CurrentBalances {...mockProps} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Action buttons', () => {
    const showModal = jest.fn();
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CurrentBalances {...mockProps} showModal={showModal} />);
      showModal.mockClear();
    });

    it('handles clicks on deposit buttons', () => {
      wrapper
        .find('Button')
        .first()
        .simulate('click');
      expect(showModal).toHaveBeenCalledWith('deposit', Object.values(mockProps.products)[0]);
    });

    it('handles clicks on withdraw buttons', () => {
      wrapper
        .find('Button')
        .last()
        .simulate('click');
      expect(showModal).toHaveBeenCalledWith('withdraw', Object.values(mockProps.products)[2]);
    });

    test('user can sort table by different columns', () => {
      expect(wrapper.state().sort).toEqual({});
      expect(wrapper.find('.clear-sort-button').exists()).toBe(false);

      wrapper
        .find('TableHeader')
        .find({ className: 'product' })
        .simulate('click');
      expect(wrapper.state().sort).toEqual({ category: 'id', direction: 'ascending' });
      expect(wrapper.find('.clear-sort-button').exists()).toBe(true);
      wrapper
        .find('TableHeader')
        .find({ className: 'balance' })
        .simulate('click');
      expect(wrapper.state().sort).toEqual({ category: 'balance', direction: 'ascending' });
      wrapper
        .find('TableHeader')
        .find({ className: 'hold' })
        .simulate('click');
      expect(wrapper.state().sort).toEqual({ category: 'hold', direction: 'ascending' });
      wrapper
        .find('TableHeader')
        .find({ className: 'hold' })
        .simulate('click');
      expect(wrapper.state().sort).toEqual({ category: 'hold', direction: 'descending' });

      wrapper.find('.clear-sort-button').simulate('click');
      expect(wrapper.state().sort).toEqual({});
      expect(wrapper.find('.clear-sort-button').exists()).toBe(false);
    });
  });
});
