import React from 'react';
import { AccountInformation } from '../../../../src/views/simple-ui/settings/AccountInformation';

const mockProps = {
  userProfile: {
    country: 'United States',
    street_address: 'Main street',
    city: 'New York',
    date_of_birth: 315529200000,
    surname: 'Doe',
    phone_number: '123456789',
    state_province: 'New York',
    given_name: 'John',
    middle_name: 'Peter',
    postal_code: 'ABC123',
    status: 'SUCCESS',
  },
  schema: {
    status: 'SUCCESS',
    properties: [
      {
        name: 'Given name',
        required: true,
        type: 'text',
        placeholder: 'John',
        writeOnce: true,
        errorMessages: [],
      },
      {
        name: 'Middle name',
        required: false,
        type: 'text',
        placeholder: 'Peter',
        writeOnce: true,
        errorMessages: [],
      },
      {
        name: 'Surname',
        required: true,
        type: 'text',
        placeholder: 'Doe',
        writeOnce: true,
        errorMessages: [],
      },
      {
        name: 'Phone number',
        required: false,
        type: 'text',
        placeholder: '123456789',
        writeOnce: false,
        errorMessages: [],
      },
      {
        name: 'Date of birth',
        required: true,
        type: 'date',
        writeOnce: false,
        errorMessages: [],
      },
      {
        name: 'Country',
        type: 'select',
        required: true,
        options: [
          {
            name: 'United States',
          },
          {
            name: 'France',
          },
          {
            name: '-',
          },
        ],
        placeholder: 'Country',
        writeOnce: false,
        errorMessages: [],
      },
      {
        name: 'City',
        required: true,
        type: 'text',
        placeholder: 'New York',
        writeOnce: false,
        errorMessages: [],
      },
      {
        name: 'Street address',
        required: true,
        type: 'text',
        placeholder: 'Main street',
        writeOnce: false,
        errorMessages: [],
      },
      {
        name: 'Postal code',
        required: false,
        type: 'text',
        placeholder: 'ABC123',
        writeOnce: false,
        errorMessages: [],
      },
      {
        name: 'Document',
        required: false,
        type: 'file-button',
        writeOnce: false,
      },
      {
        name: 'State/Province',
        required: true,
        type: 'text',
        placeholder: 'New York',
        writeOnce: false,
        errorMessages: [],
      },
    ],
  },
  updateProfileStatus: 'NONE',
  getUserProfile: jest.fn(),
  getProfileSchema: jest.fn(),
  updateUserProfile: jest.fn(),
};

describe('<AccountInformation/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AccountInformation {...mockProps} />);
  });

  it('renders, gets user profile + schema, and matches the snapshot', () => {
    expect(mockProps.getUserProfile).toHaveBeenCalledTimes(1);
    expect(mockProps.getProfileSchema).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });

  test('clicking the update button makes the form active', () => {
    expect(wrapper.state().active).toEqual(false);
    expect(wrapper.find('.account-form').length).toBe(1);
    expect(wrapper.find('.account-form-active').length).toBe(0);
    expect(wrapper.find('Button').props().children).toBe('UPDATE');
    wrapper.find('Button').simulate('click');
    expect(wrapper.state().active).toEqual(true);
    expect(wrapper.find('.account-form').length).toBe(0);
    expect(wrapper.find('.account-form-active').length).toBe(1);
    expect(wrapper.find('Button').props().children).toBe('CANCEL');
  });

  test('submitting the form dispatches updateUserProfile', () => {
    const mockKycFormData = {
      country: 'France',
      streetAddress: 'Main Street',
      city: 'Paris',
      dateOfBirth: 315529200000,
      surname: 'Doe',
      phoneNumber: '987654321',
      'state/province': 'Paris',
      givenName: 'John',
      middleName: 'Peter',
      postalCode: 'DEF456',
    };
    const expectedPayload = {
      custom_profile: JSON.stringify({
        country: mockKycFormData.country,
        street_address: mockKycFormData.streetAddress,
        city: mockKycFormData.city,
        date_of_birth: mockKycFormData.dateOfBirth,
        surname: mockKycFormData.surname,
        phone_number: mockKycFormData.phoneNumber,
        state_province: mockKycFormData['state/province'],
        given_name: mockKycFormData.givenName,
        middle_name: mockKycFormData.middleName,
        postal_code: mockKycFormData.postalCode,
      }),
    };
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'handleClick');

    wrapper.find('Button').simulate('click');
    wrapper
      .find('.account-form-active')
      .props()
      .onSubmit(mockKycFormData);
    expect(handleClickSpy).toHaveBeenCalledTimes(1);
    expect(mockProps.updateUserProfile).toHaveBeenCalledTimes(1);
    expect(mockProps.updateUserProfile).toHaveBeenCalledWith(expectedPayload);
  });
});

test('<AccountInformation/> renders an error message if user if younger than 18', () => {
  const props = { ...mockProps };
  props.updateProfileStatus = 'FAILED';
  const wrapper = shallow(<AccountInformation {...props} />);
  expect(
    wrapper.containsMatchingElement(<p className="verify-error">Must be 18 years or older</p>),
  ).toBe(true);
});
