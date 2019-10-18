import React from 'react';
import TableCell from '../../../src/elements/table/TableCell';

describe('<TableCell/>', () => {
  it('renders a <td> element', () => {
    const wrapper = shallow(<TableCell />);
    expect(wrapper.matchesElement(<td className="cell " />)).toBe(true);
  });

  it('renders the props correctly', () => {
    const wrapper = shallow(<TableCell className="mockClass">mockChild</TableCell>);
    expect(wrapper.matchesElement(<td className="cell mockClass">mockChild</td>)).toBe(true);
  });
});
