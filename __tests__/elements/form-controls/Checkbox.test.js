import React from 'react';
import Checkbox from '../../../src/elements/form-controls/Checkbox';
import { toDashCase } from '../../../src/util/helpers';

describe('<Checkbox/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Checkbox name="mock name" translation="en" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the props correctly', () => {
    const mockProps = {
      name: 'mock checkbox name',
      className: 'mockClass',
      value: 'true',
      translation: 'en',
      onSubmit: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn(),
      onBlur: jest.fn(),
    };
    const wrapper = shallow(<Checkbox {...mockProps} />);
    expect(wrapper.hasClass(mockProps.className)).toBe(true);
    expect(
      wrapper.containsMatchingElement(<div className="checkbox-text">{mockProps.name}</div>),
    ).toBe(true);
    const checkboxProps = wrapper.find('input').props();
    expect(checkboxProps.name).toEqual(toDashCase(mockProps.name));
    expect(checkboxProps.value).toEqual(mockProps.value);
    expect(checkboxProps.onSubmit).toEqual(mockProps.onSubmit);
    expect(checkboxProps.onChange).toEqual(mockProps.onChange);
    expect(checkboxProps.onFocus).toEqual(mockProps.onFocus);
    expect(checkboxProps.onBlur).toEqual(mockProps.onBlur);
  });

  it('renders a checkbox with link(s)', () => {
    const mockProps = {
      name: 'mock name',
      translation: 'en',
      textTranslation: {
        text: 'I agree to',
        translation: 'MARKETING.SIGNUP_FIELD_CHECKBOX_AGREE',
      },
      checkboxWithLinks: true,
      links: [
        {
          text: 'Terms and Conditions',
          translation: 'MARKETING.SIGNUP_FIELD_CHECKBOX_AGREE_TERMS_TRANSLATION',
          path: '/terms',
        },
      ],
    };
    const wrapper = shallow(<Checkbox {...mockProps} />);
    expect(wrapper.find('.checkbox-text').text()).toMatch(mockProps.textTranslation.text);
    expect(wrapper.find('.signup-agree-link').exists()).toBe(true);
    expect(wrapper.find('.signup-agree-link').props().children).toBe(mockProps.links[0].text);
    expect(wrapper.find('.signup-agree-link').props().to).toBe(mockProps.links[0].path);
  });
});
