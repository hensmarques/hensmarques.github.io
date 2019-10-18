import React from 'react';
import { DateInput } from '../../../src/elements/form-controls/DateInput';
import { toDashCase, toAllCaps, getFormattedDate } from '../../../src/util/helpers';

const mockDateStr = '01/01/2018';

describe('<DateInput/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<DateInput name="Date of Birth" profile={{date_of_birth: mockDateStr }}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders custom props correctly and handles translations', () => {
    const mockProps = {
      className: 'mockClass',
      name: 'Date of Birth',
      placeholderText: 'mockPlaceholder',
      label: 'mockLabel',
      details: 'mockDetails',
      required: true,
      translation: 'en',
      profile: {
        date_of_birth: mockDateStr
      }
    };
    const translationSpy = jest.spyOn(window, '_t').mockClear();
    const wrapper = shallow(<DateInput {...mockProps} />);
    expect(wrapper.hasClass(mockProps.className)).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <div className="field-label">
          {mockProps.label}
          <span className="form-required">*</span>
          <div className="field-details">{mockProps.details}</div>
        </div>
      )
    ).toBe(true);
    expect(wrapper.find('DatePicker').props().placeholderText).toBe(mockProps.placeholderText);
    expect(translationSpy).toHaveBeenCalledWith(
      mockProps.name,
      `${mockProps.translation}.${toAllCaps(mockProps.name)}`
    );
    expect(translationSpy).toHaveBeenCalledWith(
      mockProps.placeholderText,
      `${mockProps.translation}.${toAllCaps(mockProps.name)}_PLACEHOLDER`
    );
  });

  describe('Change in date input', () => {
    const moment = jest.requireActual('moment');
    const mockDateObj = new Date('01/01/2018 12:00');
    // const mockDateStr = '01/01/2018';
    let callback = jest.fn();
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<DateInput name="Date of Birth" onChange={callback} profile={{date_of_birth: mockDateStr }}/>);
    });

    it('updates state and sets the DatePicker value', () => {
      expect(wrapper.state()).toEqual({ date: null, ageValidation: true });
      wrapper
        .find('DatePicker')
        .props()
        .onChange(mockDateObj, mockDateStr);
      expect(wrapper.state()).toEqual({ date: moment(mockDateObj), ageValidation: true });
      expect(wrapper.find('DatePicker').props().selected).toEqual(moment(mockDateObj));
    });

    it('fires onChange callback', () => {
      callback.mockClear();
      wrapper
        .find('DatePicker')
        .props()
        .onChange(mockDateObj, mockDateStr);
      expect(callback).toHaveBeenCalledWith({ target: { value: getFormattedDate(mockDateObj.getTime()), type: 'date' } });
    });
  });
});