import React from 'react';
import HelpAnswer from '../../../../src/views/simple-ui/help/HelpAnswer';

describe('<HelpAnswer/>', () => {
  it('renders and matches the snapshot', () => {
    const question = 'mock question';
    const answer = 'mock answer';
    const wrapper = shallow(<HelpAnswer question={question}>{answer}</HelpAnswer>);
    expect(wrapper).toMatchSnapshot();
  });
});
