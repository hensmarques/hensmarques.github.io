import React from 'react';
import SettingsWrapper from '../../../../src/views/simple-ui/settings/SettingsWrapper';
import { toAllCaps } from '../../../../src/util/helpers';

describe('<SettingsWrapper/>', () => {
  it('renders without crashing', () => {
    shallow(<SettingsWrapper name="mockName" />);
  });

  it('renders the props correctly', () => {
    const name = 'mock name';
    const translation = 'en';
    const childComponent = <p>mock child</p>;
    const translationSpy = jest.spyOn(window, '_t').mockClear();
    const wrapper = shallow(
      <SettingsWrapper name={name} translation={translation}>
        {childComponent}
      </SettingsWrapper>
    );
    expect(wrapper.containsMatchingElement(<h4>{name}</h4>)).toBe(true);
    expect(
      wrapper.containsMatchingElement(<div className="settings-content">{childComponent}</div>)
    ).toBe(true);
    expect(translationSpy).toHaveBeenCalledWith(name, `${translation}.${toAllCaps(name)}_NAME`);
  });
});
