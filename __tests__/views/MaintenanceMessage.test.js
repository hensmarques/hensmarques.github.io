import React from 'react';
import { MaintenanceMessage } from '../../src/views/MaintenanceMessage';

const DEFAULT_TEXT = 'Some pages are temporarily unavailable.';
const DEFAULT_TRANSLATE = '.CONTENT';
const DEFAULT_PAGE_TYPE = 'simple-ui';
const TRANSLATION = 'MAINTENANCE_MODE';

describe('<MaintenanceMessage/>', () => {
  const mockProps = {
    msg: {
      translate: DEFAULT_TRANSLATE,
      msg: DEFAULT_TEXT,
    },
    t: TRANSLATION,
    pageType: DEFAULT_PAGE_TYPE,
  };
  const wrapper = shallow(<MaintenanceMessage {...mockProps} />);

  it('renders 1 .maintenance-message inside', () => {
    expect(wrapper.find('.maintenance-message').length).toBe(1);
  });

  it('renders 1 .maintenance-message-content inside', () => {
    expect(wrapper.find('.maintenance-message-content').length).toBe(1);
    expect(wrapper.containsAllMatchingElements([
      <div
        className="maintenance-message-content"
        dangerouslySetInnerHTML={{
          __html: _t(mockProps.msg.msg, mockProps.msg.translate),
        }}
      />,
    ])).toBe(true);
  });

  it('renders and matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
