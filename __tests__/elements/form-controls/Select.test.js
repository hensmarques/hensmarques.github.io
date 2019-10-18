import React from 'react';
import Select from '../../../src/elements/form-controls/Select';
import { toDashCase, toAllCaps } from '../../../src/util/helpers';

describe('<Select/>', () => {
  const spy = jest.spyOn(window, '_t');

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Select name="mockName" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the props correctly', () => {
    const mockProps = {
      className: 'mockClass',
      name: 'Mock Name',
      value: 'mockValue',
      required: true,
      details: 'mockDetails',
      onFocus: jest.fn(),
      onChange: jest.fn(),
      translation: 'en'
    };
    spy.mockClear();
    const wrapper = shallow(<Select {...mockProps} />);
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
    const selectProps = wrapper.find('select').props();
    expect(selectProps.name).toBe(toDashCase(mockProps.name));
    expect(selectProps.value).toBe(mockProps.value);
    expect(selectProps.onFocus).toBe(mockProps.onFocus);
    expect(selectProps.onChange).toBe(mockProps.onChange);
    expect(spy.mock.calls[0]).toEqual([
      mockProps.name,
      `${mockProps.translation}.${toAllCaps(mockProps.name)}`
    ]);
  });

  describe('renderSelectOptions', () => {
    const mockOptions = [
      { name: 'foo', value: '1' },
      { name: 'bar', value: '2' },
      { name: 'biz', value: '3' }
    ];

    beforeEach(() => {
      spy.mockClear();
    });

    it('renders the options passed through props', () => {
      const wrapper = shallow(<Select options={mockOptions} name="mockName" />);
      expect(wrapper.find('option').length).toBe(mockOptions.length);
      expect(spy.mock.calls.length).toBe(mockOptions.length + 1);
    });

    it('renders a disabled select option if placeholder prop is included', () => {
      const wrapper = shallow(
        <Select options={mockOptions} name="mockName" placeholder="mockPlaceholder" />
      );
      expect(wrapper.find('option').length).toBe(mockOptions.length + 1);
      expect(
        wrapper.containsMatchingElement(
          <option value="" disabled={true}>
            mockPlaceholder
          </option>
        )
      ).toBe(true);
      expect(spy.mock.calls.length).toBe(mockOptions.length + 2);
    });
  });
});
