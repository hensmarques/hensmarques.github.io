import React from 'react';
import { Settings } from '../../../src/views/simple-ui/Settings';

describe('<Settings/>', () => {
  const loadUserSettings = jest.fn();
  const getUserProfile = jest.fn();
  const getKycStatus = jest.fn();
  const kycRequestStatus = jest.fn();

  it('renders a loader spinner and gets user data on mount', () => {
    const settings = {
      status: 'pending',
    };
    const wrapper = shallow(
      <Settings
        settings={settings}
        loadUserSettings={loadUserSettings}
        getUserProfile={getUserProfile}
        getKycStatus={getKycStatus}
        kycRequestStatus={kycRequestStatus}
      />,
    );
    expect(wrapper.find('.loader-container').exists()).toBe(true);
    expect(wrapper.find('Spinner').exists()).toBe(true);
    expect(loadUserSettings).toHaveBeenCalledTimes(1);
    expect(getUserProfile).toHaveBeenCalledTimes(1);
    expect(getKycStatus).toHaveBeenCalledTimes(1);
    expect(kycRequestStatus).toHaveBeenCalledTimes(1);
  });

  it('renders and matches the snapshot', () => {
    const settings = {
      status: 'success',
    };
    const wrapper = shallow(
      <Settings
        settings={settings}
        loadUserSettings={loadUserSettings}
        getUserProfile={getUserProfile}
        getKycStatus={getKycStatus}
        kycRequestStatus={kycRequestStatus}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
