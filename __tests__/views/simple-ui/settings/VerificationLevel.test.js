import React from 'react';
import VerificationLevel from '../../../../src/views/simple-ui/settings/VerificationLevel';

describe('<VerificationLevel/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<VerificationLevel />);
    expect(wrapper).toMatchSnapshot();
  });
});
