import React from 'react';
import FormLabel from '../../../src/elements/form-controls/FormLabel';
import { toAllCaps } from '../../../src/util/helpers';

test('<FormLabel/> renders props correctly and handles translation', () => {
  const mockProps = {
    className: 'mock-class',
    name: 'mock name',
    translation: 'en',
  };
  const translationSpy = jest.spyOn(window, '_t');
  const wrapper = shallow(<FormLabel {...mockProps} />);
  expect(wrapper.find('.form-label').hasClass(mockProps.className)).toBe(true);
  expect(wrapper.props().dangerouslySetInnerHTML.__html).toBe(mockProps.name);
  expect(translationSpy).toHaveBeenCalledTimes(1);
  expect(translationSpy).toHaveBeenCalledWith(
    mockProps.name,
    `${mockProps.translation}.${toAllCaps(mockProps.name)}`,
  );
});
