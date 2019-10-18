import React from 'react';
import RadioInput from '../../../src/elements/form-controls/RadioInput';
import { toAllCaps } from '../../../src/util/helpers';

test('<RadioInput/> renders props correctly and handles translation', () => {
  const mockProps = {
    className: 'mock-class',
    name: 'mock name',
    options: [{ name: 'name1', value: 'value1' }, { name: 'name2', value: 'value2' }],
    value: 'option1',
    onChange: jest.fn(),
    required: true,
    details: 'mock details',
    translation: 'en',
  };
  const translationSpy = jest.spyOn(window, '_t');
  const wrapper = shallow(<RadioInput {...mockProps} />);
  expect(wrapper.find('.radio-input').hasClass(mockProps.className)).toBe(true);
  expect(
    wrapper.containsMatchingElement(
      <div className="field-label">
        {`${mockProps.name}*`}
        <div className="field-details">{mockProps.details}</div>
      </div>,
    ),
  ).toBe(true);
  mockProps.options.forEach((option) => {
    expect(wrapper.find({ value: option.value }).exists()).toBe(true);
    expect(
      wrapper.containsMatchingElement(<div className="radio-button-label">{option.name}</div>),
    ).toBe(true);
    expect(translationSpy).toHaveBeenCalledWith(
      option.name,
      `${mockProps.translation}.${toAllCaps(option.name)}`,
    );
  });
  expect(translationSpy).toHaveBeenCalledTimes(2 + mockProps.options.length);
  expect(translationSpy).toHaveBeenCalledWith(
    mockProps.name,
    `${mockProps.translation}.${toAllCaps(mockProps.name)}`,
  );
  expect(translationSpy).toHaveBeenCalledWith(
    mockProps.details,
    `${mockProps.translation}.${toAllCaps(mockProps.name)}_DETAILS`,
  );
});
