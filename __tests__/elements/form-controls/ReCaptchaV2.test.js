import React from 'react';
import { ReCAPTCHAv2 } from '../../../src/elements/form-controls/ReCaptchaV2';

describe('<ReCAPTCHAv2/>', () => {
  const config = {
    reCaptcha: {
      key: '6LeFaFkUAAAAAJVL3BuBTdv9kT2Hk2fJTKlodoXm',
      theme: 'dark',
    }
  };

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ReCAPTCHAv2 config={config} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('fires onChange callback', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<ReCAPTCHAv2 config={config} onChange={onChangeMock} />);
    wrapper.instance().onChange('foobar');
    expect(onChangeMock).toHaveBeenCalled();
  });
});
