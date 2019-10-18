import React from 'react';
import { createMockStore } from 'redux-test-utils';
import TradeSidebar from '../../../src/views/trade-ui/TradeSidebar';
import types from '../../../src/actions/types';

const mockState = {
  user: {},
  products: {},
};
const store = createMockStore(mockState);

describe('<TradeSidebar/>', () => {
  it('renders navigation links and balances widget', () => {
    const wrapper = mountWithStore(<TradeSidebar />, store);
    expect(wrapper.find('NavLink').length).toBe(6);
    expect(wrapper.find('.sidebar-icon').length).toBe(7);
    expect(wrapper.find('Balances').exists()).toBe(true);
    wrapper.unmount();
  });

  it('renders sidebar open with showSidebar prop', () => {
    const wrapper = mountWithStore(<TradeSidebar showSidebar />, store);
    expect(wrapper.find('.sidebar.open').exists()).toBe(true);
    wrapper.unmount();
  });

  it('dispatches logout action when Logout link is clicked', () => {
    const wrapper = mountWithStore(<TradeSidebar showSidebar />, store);
    wrapper
      .find('a.sidebar-option')
      .last()
      .simulate('click');
    expect(store.isActionTypeDispatched(types.user.logout)).toBe(true);
    wrapper.unmount();
  });

  it('fires closeSidebar when close icon is clicked', () => {
    const closeSidebarMock = jest.fn();
    const wrapper = mountWithStore(
      <TradeSidebar showSidebar closeSidebar={closeSidebarMock} />,
      store,
    );
    expect(closeSidebarMock).not.toHaveBeenCalled();
    wrapper.find('.far.fa-times').simulate('click');
    expect(closeSidebarMock).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});
