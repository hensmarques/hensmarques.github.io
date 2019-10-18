import React from 'react';
import ProgressBar from '../../src/elements/ProgressBar';

test('ProgressBar with no progress matches snapshot', () => {
  const wrapper = shallow(<ProgressBar completed={0} />);
  expect(wrapper).toMatchSnapshot();
});

test('ProgressBar with half progress matches snapshot', () => {
  const wrapper = shallow(<ProgressBar completed={0.5} />);
  expect(wrapper).toMatchSnapshot();
});

test('ProgressBar with full progress matches snapshot', () => {
  const wrapper = shallow(<ProgressBar completed={1} />);
  expect(wrapper).toMatchSnapshot();
});
