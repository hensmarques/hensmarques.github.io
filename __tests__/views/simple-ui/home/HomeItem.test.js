import React from 'react';
import HomeItem from '../../../../src/views/simple-ui/home/HomeItem';

describe('<HomeItem/>', () => {
  it('renders without crashing', () => {
    shallow(<HomeItem />);
  });

  it('renders the props correctly and matches the snapshot', () => {
    const mockProps = {
      header: 'mockHeader',
      content: 'mock content',
      icon: (
        <svg>
          <circle />
        </svg>
      ),
      action: <button>mock action</button>
    };
    const wrapper = shallow(<HomeItem {...mockProps} />);
    expect(
      wrapper.containsAllMatchingElements([
        <h4>{mockProps.header}</h4>,
        <div className="icon-inner">{mockProps.icon}</div>,
        <div className="item-content">
          <p>{mockProps.content}</p>
          <div>{mockProps.action}</div>
        </div>
      ])
    ).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
