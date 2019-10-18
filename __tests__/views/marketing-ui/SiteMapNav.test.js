import React from 'react';
import SiteMapNav from '../../../src/views/marketing-ui/SiteMapNav';

describe('<SiteMapNav/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<SiteMapNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
