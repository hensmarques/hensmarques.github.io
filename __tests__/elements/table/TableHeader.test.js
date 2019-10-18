import React from 'react';
import TableHeader from '../../../src/elements/table/TableHeader';

describe('<TableHeader/>', () => {
  it('renders a <thead> element', () => {
    const wrapper = shallow(<TableHeader />);
    expect(wrapper.matchesElement(<thead className="table-header" />)).toBe(true);
  });

  it('renders children', () => {
    const wrapper = shallow(<TableHeader>mockChild</TableHeader>);
    expect(wrapper.matchesElement(<thead className="table-header">mockChild</thead>)).toBe(true);
  });
});
