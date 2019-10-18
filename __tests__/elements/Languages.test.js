import React from 'react';
import { Languages } from '../../src/elements/Languages';

test('<Languages/> with default props matches the snapshot', () => {
  const defaultConfig = {
    lang: {
      default: 'en-us',
      items: {
        'en-us': 'English (US)',
      },
    },
  };
  const wrapper = shallow(<Languages config={defaultConfig} />);
  expect(localStorage.getItem).toHaveBeenCalledWith('currentLanguage');
  expect(wrapper).toMatchSnapshot();
});

describe('with multiple languages', () => {
  const configWithMultipleLangs = {
    lang: {
      default: 'en-us',
      items: {
        'en-us': 'English (US)',
        de: 'Deutsch',
        fr: 'Francais',
      },
    },
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Languages config={configWithMultipleLangs} />);
  });

  it('renders, can toggle dropdown language list, and matches snapshot', () => {
    expect(wrapper.state()).toEqual({ showDropdown: false });
    expect(wrapper.find('.fa-caret-down').length).toBe(1);
    expect(wrapper.find('.fa-caret-up').length).toBe(0);
    expect(wrapper.find('.dropdown-list').length).toBe(0);
    expect(wrapper.find('.language-item').length).toBe(0);
    wrapper.find('.dropdown-button').simulate('click');
    expect(wrapper.state()).toEqual({ showDropdown: true });
    expect(wrapper.find('.fa-caret-down').length).toBe(0);
    expect(wrapper.find('.fa-caret-up').length).toBe(1);
    expect(wrapper.find('.dropdown-list').length).toBe(1);
    expect(wrapper.find('.language-item').length).toBe(
      Object.keys(configWithMultipleLangs.lang.items).length,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('can change language', () => {
    // Mocking to make assertions towards window.reload()
    const spyWindowReload = jest.fn();
    const oldWindow = window.location;
    delete window.location;
    window.location = {
      ...oldWindow,
      reload: spyWindowReload,
    };

    wrapper.instance().toggleDropdown();
    // Click on the last language link (Francais)
    wrapper
      .find('a')
      .last()
      .simulate('click');
    // Check that localStorage item is set with correct code
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'currentLanguage',
      Object.keys(configWithMultipleLangs.lang.items)[2],
    );
    // And that page is refreshed
    expect(spyWindowReload).toHaveBeenCalledTimes(1);

    window.location = oldWindow;
  });
});
