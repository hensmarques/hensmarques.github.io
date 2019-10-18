import React from 'react';
import { Home } from '../../../src/views/simple-ui/Home';

describe('<Home/>', () => {
  const mockProps = {
    getKycStatus: jest.fn()
  }

  it('renders 3 HomeItem components inside a SimpleUIWrapper', () => {
    const wrapper = shallow(<Home {...mockProps} />);
    expect(wrapper.find('Connect(SimpleUiWrapper)').length).toBe(1);
    expect(wrapper.find('HomeItem').length).toBe(3);
  });

  it('handles translation of content', () => {
    const translation = 'en';
    const translationSpy = jest.spyOn(window, '_t').mockClear();
    const wrapper = shallow(<Home {...mockProps} t={translation} />);
    expect(wrapper.find('Connect(SimpleUiWrapper)').props().translation).toBe(translation);
    expect(translationSpy).toHaveBeenCalledTimes(6);
  });

  it('renders and closes the VerifyModal', () => {
    const wrapper = shallow(<Home {...mockProps} />);
    expect(wrapper.state().modal).toBe('none');
    expect(wrapper.find('Connect(VerifyModal)').exists()).toBe(false);
    wrapper.setState({ modal: 'verify' });
    expect(wrapper.find('Connect(VerifyModal)').exists()).toBe(true);
    // wrapper.find('Connect(VerifyModal)').props().onClose(); // Ryan removed Modal from VerifyModal for better ErrorBoundary functionality,
    // expect(wrapper.state().modal).toBe('none'); // VerifyModal component should simply be the contents of the modal, not the modal handler itself.
    // expect(wrapper.find('Connect(VerifyModal)').exists()).toBe(false); // In this way it could also be used in a non-modal environment
  });
});
