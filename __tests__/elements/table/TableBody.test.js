import React from 'react';
import TableBody from '../../../src/elements/table/TableBody';

describe('<TableBody/>', () => {
  it('renders a <tbody> element', () => {
    const wrapper = shallow(<TableBody />);
    expect(wrapper.matchesElement(<tbody className="table-body" />)).toBe(true);
  });

  it('renders children', () => {
    const wrapper = shallow(<TableBody>mockChild</TableBody>);
    expect(wrapper.matchesElement(<tbody className="table-body">mockChild</tbody>)).toBe(true);
  });
});
