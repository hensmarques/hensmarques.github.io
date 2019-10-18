import React from 'react';
import { MyAccountsTablesContainer } from '../../../../src/views/simple-ui/my-accounts/MyAccountsTablesContainer';

describe('<MyAccountsTablesContainer/>', () => {
  const mockProps = {
    loadData: jest.fn(),
  };
  let wrapper;

  beforeEach(() => {
    mockProps.loadData.mockClear();
    wrapper = shallow(<MyAccountsTablesContainer {...mockProps} />);
  });

  it('renders and matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('fires loadData on mount', () => {
    expect(mockProps.loadData).toHaveBeenCalledTimes(1);
  });
});
