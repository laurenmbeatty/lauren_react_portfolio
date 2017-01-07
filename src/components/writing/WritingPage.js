import React from 'react';
import Envelope from './Envelope';

class WritingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({
      activeIndex: index
    });
  }

  render() {
    //data
    const envelopeInfo = [
      {
        url: "https://collaborate2016.zerista.com/event/member/235430",
        title: "Introduction to Oracle JET",
        location: "Collaborate 2016"
      },
      {
        url: "http://cfour.fishbowlsolutions.com/2016/07/12/oracle-jet-requirejs/",
        title: "Oracle JET and RequireJS",
        location: "C4 Blog"
      },
      {
        url: "http://prairiecode.amegala.com",
        title: "Introduction to Oracle JET",
        location: "Prairie.Code()"
      },
      {
        url: "http://cfour.fishbowlsolutions.com/2016/02/26/favorite-things/",
        title: "Ultimate Productivity",
        location: "C4 Blog"
      },
      {
        url: "http://cfour.fishbowlsolutions.com/2016/03/28/designers-introduction-oracle-jet/",
        title: "Introduction to Oracle JET",
        location: "C4 Blog"
      }
    ];

    return (
      <main>
          <div className="writings-content-wrapper">
              {envelopeInfo.map((envelope, index) => (
                <Envelope {...envelope} isActive={this.state.activeIndex===index} index={index} key={index} onToggle={this.handleClick.bind(null, index, this)}/>
              ))}
          </div>
      </main>
    );
  }
}

export default WritingPage;
