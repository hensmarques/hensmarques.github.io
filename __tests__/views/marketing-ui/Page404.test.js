import React from 'react';
import Page404 from '../../../src/views/marketing-ui/Page404';

describe('<Page404/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Page404 />);
    expect(wrapper).toMatchSnapshot();
  });
});
