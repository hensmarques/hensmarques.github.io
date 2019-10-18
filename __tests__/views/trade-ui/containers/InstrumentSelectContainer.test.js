import React from 'react';
import InstrumentSelectContainer from '../../../../src/views/trade-ui/containers/InstrumentSelectContainer';

describe('<InstrumentSelectContainer/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<InstrumentSelectContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});