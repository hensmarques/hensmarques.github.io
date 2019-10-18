import React from 'react';
import {
  CheckIcon,
  RegisterAccountIcon,
  FundAccountIcon,
  TransferBitcoinIcon
} from '../../../../src/views/simple-ui/home/HomeIcons';

describe('<CheckIcon/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<CheckIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<RegisterAccountIcon/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<RegisterAccountIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<FundAccountIcon/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<FundAccountIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<TransferBitcoinIcon/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<TransferBitcoinIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
