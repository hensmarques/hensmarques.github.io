import React from 'react';
import TextArea from '../../../src/elements/form-controls/TextArea';
import { toDashCase, toAllCaps } from '../../../src/util/helpers';

describe('<TextArea/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<TextArea name="mockName" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the props correctly', () => {
    const mockProps = {
      className: 'mockClass',
      placeholder: 'mockPlaceholder',
      name: 'Mock Name',
      value: 'mockValue',
      required: true,
      details: 'mockDetails',
      onFocus: jest.fn(),
      onChange: jest.fn(),
      translation: 'en'
    };
    const spy = jest.spyOn(window, '_t');
    spy.mockClear();
    const wrapper = shallow(<TextArea {...mockProps} />);
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
    const textareaProps = wrapper.find('textarea').props();
    expect(textareaProps.name).toBe(toDashCase(mockProps.name));
    expect(textareaProps.value).toBe(mockProps.value);
    expect(textareaProps.onFocus).toBe(mockProps.onFocus);
    expect(textareaProps.onChange).toBe(mockProps.onChange);
    expect(spy.mock.calls[0]).toEqual([
      mockProps.name,
      `${mockProps.translation}.${toAllCaps(mockProps.name)}`
    ]);
    expect(spy.mock.calls[1]).toEqual([
      mockProps.placeholder,
      `${mockProps.translation}.${toAllCaps(mockProps.name)}_PLACEHOLDER`
    ]);
  });
});
