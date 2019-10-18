import React from 'react';
import TableRow from '../../../src/elements/table/TableRow';

describe('<TableRow/>', () => {
  it('renders a <tr> element', () => {
    const wrapper = shallow(<TableRow />);
    expect(wrapper.matchesElement(<tr className="row" />)).toBe(true);
  });

  it('renders children', () => {
    const wrapper = shallow(<TableRow>mockChild</TableRow>);
    expect(wrapper.matchesElement(<tr className="row">mockChild</tr>)).toBe(true);
  });
});
