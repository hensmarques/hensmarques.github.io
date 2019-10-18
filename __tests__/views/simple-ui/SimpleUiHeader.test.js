import React from 'react';
import { SimpleUiHeader } from '../../../src/views/simple-ui/SimpleUiHeader';
import { Link } from "react-router-dom";

describe('<SimpleUiHeader/>', () => {
  const selectedInstrument = {
    base: 'BTC',
    quote: 'USD'
  };
  const selectedBidAsk = {
    ask: 3000,
    bid: 3030
  };
  const help = 'HELP';
  const username = 'foobar';
  
  let wrapper;

  beforeEach(() => {
     wrapper = shallow(
      <SimpleUiHeader
        selectedInstrument={selectedInstrument}
        selectedBidAsk={selectedBidAsk}
        help={help}
        username={username}
      />
    );
  });

  it('renders and matches the snapshot', () => {
    expect(wrapper.containsAllMatchingElements([
          <div className="header-hamburger-button">
            <i className="far fa-bars fa-2x" />
          </div>,
          <div className="market-value">
            {selectedBidAsk.ask} - {selectedInstrument.base}/{selectedInstrument.quote}
          </div>,
          <div>
            <Link>
              {help}
            </Link>
            <Link>
              {username}
            </Link>
          </div>
      ])
    ).toBe(true);
    });
    expect(wrapper).toMatchSnapshot();
    
  });
