import React from 'react';
import AddressSkeleton from '../../../../src/views/simple-ui/my-accounts/AddressSkeleton';

describe('<AddressSkeleton/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<AddressSkeleton />);
    expect(wrapper).toMatchSnapshot();
  });
});
