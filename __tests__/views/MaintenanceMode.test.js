import React from 'react';
import { MaintenanceOverlay } from '../../src/views/MaintenanceOverlay';

const DEFAULT_TEXT = 'This page is currently undergoing maintenance.';
const DEFAULT_TRANSLATE = 'MAINTENANCE_MODE.CONTENT';

describe('<MaintenanceOverlay/>', () => {
  const mockProps = {
    msg: {
      translate: DEFAULT_TRANSLATE,
      msg: DEFAULT_TEXT,
    },
    enabled: true,
  };
  const wrapper = shallow(<MaintenanceOverlay {...mockProps} />);

  it('renders 1 .maintenance-mode inside', () => {
    expect(wrapper.find('.maintenance-mode').length).toBe(1);
  });

  it('renders 1 .maintenance-mode-content inside', () => {
    expect(wrapper.find('.maintenance-mode-content').length).toBe(1);
    expect(wrapper.containsAllMatchingElements([
      <div
        className="maintenance-mode-content"
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
