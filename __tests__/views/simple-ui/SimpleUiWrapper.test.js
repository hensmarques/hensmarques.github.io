import React from 'react';
import { SimpleUiWrapper } from '../../../src/views/simple-ui/SimpleUiWrapper';

describe('<SimpleUiWrapper/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<SimpleUiWrapper title="mock title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the props and children correctly', () => {
    const translationSpy = jest.spyOn(window, '_t').mockClear();
    const mockProps = {
      description: 'mock description',
      pageHeader: 'mock page header',
      translation: 'en',
    };
    const wrapper = shallow(
      <SimpleUiWrapper {...mockProps}>
        <p>mock child component</p>
      </SimpleUiWrapper>,
    );
    expect(wrapper.containsMatchingElement(<h2>{mockProps.pageHeader}</h2>)).toBe(true);
    expect(wrapper.containsMatchingElement(<p>{mockProps.description}</p>)).toBe(true);
    expect(wrapper.containsMatchingElement(<p>mock child component</p>)).toBe(true);

    expect(translationSpy).toHaveBeenCalledTimes(2);
    expect(translationSpy).toHaveBeenCalledWith(
      mockProps.pageHeader,
      `${mockProps.translation}.PAGE_HEADER`,
    );
    expect(translationSpy).toHaveBeenCalledWith(
      mockProps.description,
      `${mockProps.translation}.DESCRIPTION`,
    );
  });

  it('toggles the sidebar', () => {
    const wrapper = shallow(<SimpleUiWrapper title="mock title" />);
    expect(wrapper.state().showSidebar).toBe(false);
    wrapper.instance().toggleSidebar();
    expect(wrapper.state().showSidebar).toBe(true);
  });
});
