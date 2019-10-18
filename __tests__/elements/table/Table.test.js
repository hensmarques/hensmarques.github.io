import React from 'react';
import Table from '../../../src/elements/table/Table';

describe('<Table/>', () => {
  it('renders a <table> element', () => {
    const wrapper = shallow(<Table />);
    expect(wrapper.matchesElement(<table className="table" />)).toBe(true);
  });
});
