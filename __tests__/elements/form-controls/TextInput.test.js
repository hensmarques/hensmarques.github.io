import React from 'react';
import TextInput from '../../../src/elements/form-controls/TextInput';
import { toDashCase, toAllCaps } from '../../../src/util/helpers';

describe('<TextInput/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<TextInput name="mockName" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the text input props correctly', () => {
    const mockProps = {
      className: 'mockClass',
      placeholder: 'mockPlaceholder',
      name: 'Mock Name',
      value: 'mockValue',
      required: true,
      details: 'mockDetails',
      onFocus: jest.fn(),
      onChange: jest.fn(),
      onBlur: jest.fn(),
      translation: 'en'
    };
    const spy = jest.spyOn(window, '_t').mockClear();
    const wrapper = shallow(<TextInput {...mockProps} />);
    expect(wrapper.hasClass(mockProps.className)).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <div className="field-label">
          {mockProps.name}
          <span className="form-required">*</span>
          <div className="field-details">{mockProps.details}</div>
        </div>
      )
    ).toBe(true);
    const inputProps = wrapper.find('input').props();
    expect(inputProps.name).toBe(toDashCase(mockProps.name));
    expect(inputProps.value).toBe(mockProps.value);
    expect(inputProps.onFocus).toBe(mockProps.onFocus);
    expect(inputProps.onChange).toBe(mockProps.onChange);
    expect(inputProps.onBlur).toBe(mockProps.onBlur);
    expect(inputProps.autoComplete).toBe('on');
    expect(spy.mock.calls[0]).toEqual([
      mockProps.name,
      `${mockProps.translation}.${toAllCaps(mockProps.name)}`
    ]);
    expect(spy.mock.calls[1]).toEqual([
      mockProps.placeholder,
      `${mockProps.translation}.${toAllCaps(mockProps.name)}_PLACEHOLDER`,
      {}
    ]);
  });

  it('renders a password input', () => {
    const wrapper = shallow(<TextInput name="mockName" hideInput />);
    const inputProps = wrapper.find('input').props();
    expect(inputProps.type).toBe('password');
    expect(inputProps.autoComplete).toBe('off');
  });

  xit('renders a masked input', () => {
    const mockMask = 'foo/bar';
    const wrapper = shallow(<TextInput name="mockName" mask={mockMask} />);
    expect(wrapper.find('MaskedInput').length).toBe(1);
    expect(wrapper.find('MaskedInput').props().mask).toBe(mockMask);
  });
});
