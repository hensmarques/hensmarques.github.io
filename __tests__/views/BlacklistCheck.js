import React from 'react';
import { BlacklistCheck } from '../../src/views/BlacklistCheck';

const mockUser = {
  location: {
    country_long: 'United States',
    country_short: 'US',
    ip: '120.7.15.137',
  },
};

test('user is not in blacklisted location', () => {
  const mockProps = { user: mockUser, geoLookup: { blacklistCountries: ['UK'] } };
  const childComponent = <h1>child component</h1>;
  const wrapper = mount(<BlacklistCheck {...mockProps}>{childComponent}</BlacklistCheck>);
  expect(wrapper.html()).toMatch('child component');
  expect(wrapper.find('Route')).toHaveLength(0);
});

test('user is in blacklisted location', () => {
  const mockProps = { user: mockUser, geoLookup: { blacklistCountries: ['US'] } };
  const childComponent = <h1>child component</h1>;
  const wrapper = shallow(<BlacklistCheck {...mockProps}>{childComponent}</BlacklistCheck>);
  expect(wrapper.find('Route')).toHaveLength(1);
  expect(wrapper.find('Route').props().path).toBe('/');
});
