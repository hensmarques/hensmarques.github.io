import React from 'react';
import { createMockStore } from 'redux-test-utils';
import FileSaver from 'file-saver';
import DocumentDownload from '../../../../src/views/simple-ui/home/DocumentDownload';

// Mock FileSaver module
jest.mock('file-saver');
FileSaver.saveAs.mockImplementation(file => null);

describe('<DocumentDownload/>', () => {
  const mockFile = new File(['test data'], 'document.jpg');
  const mockFilename = 'document.jpg';
  const mockState = {
    file: { value: mockFile },
  };
  const store = createMockStore(mockState);
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithStore(<DocumentDownload fileName={mockFilename} />, store);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders and handles fileName prop', () => {
    expect(wrapper.containsMatchingElement(<div className="file-name">{mockFilename}</div>)).toBe(
      true,
    );
    expect(wrapper.find('DocumentDownload')).toMatchSnapshot();
  });

  test('user can download document', () => {
    expect(FileSaver.saveAs).not.toHaveBeenCalled();
    wrapper.find('.download-button').simulate('click');
    expect(FileSaver.saveAs).toHaveBeenCalledTimes(1);
    expect(FileSaver.saveAs).toHaveBeenCalledWith(mockFile);
  });
});
