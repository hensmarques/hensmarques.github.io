import React from 'react';
import { OrdersTablesContainer } from '../../../../src/views/trade-ui/containers/OrdersTablesContainer';

describe('<OrdersTablesContainer/>', () => {
  const loadData = jest.fn();
  
  it('renders without crashing and dispatches loadData on mount', () => {
    shallow(<OrdersTablesContainer loadData={loadData}/>);
    expect(loadData).toHaveBeenCalled();
  });

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<OrdersTablesContainer loadData={loadData}/>);
    expect(wrapper).toMatchSnapshot();
  });
});