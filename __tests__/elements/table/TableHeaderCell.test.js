import React from 'react';
import TableHeaderCell from '../../../src/elements/table/TableHeaderCell';

describe('<TableHeaderCell/>', () => {
  it('renders a <th> element', () => {
    const wrapper = shallow(<TableHeaderCell />);
    expect(wrapper.matchesElement(<th className="header-cell " />)).toBe(true);
  });

  it('renders the props correctly', () => {
    const wrapper = shallow(<TableHeaderCell className="mockClass">mockChild</TableHeaderCell>);
    expect(wrapper.matchesElement(<th className="header-cell mockClass">mockChild</th>)).toBe(true);
  });
});
