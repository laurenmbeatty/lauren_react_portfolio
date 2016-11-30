import React from 'react';


class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeState: 'hamburger hamburger--collapse js-hamburger'};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
        if (this.state.activeState === 'hamburger hamburger--collapse js-hamburger'){
            this.setState({activeState: 'hamburger hamburger--collapse js-hamburger is-active'});
        } else {
            this.setState({activeState: 'hamburger hamburger--collapse js-hamburger'});
        }
  }
  render() {
    return (
      <div className="menu-toggle">
        <button className={this.state.activeState} type="button" onClick={this.handleClick}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    );
  }
}


export default Hamburger;
