import React from 'react';

class Envelope extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <div className="envelope" onClick={this.handleClick.bind(this)}>
          <div className={this.props.isActive ? 'card active' : 'card'}>
              <p><a href={this.props.url} target="_blank">{this.props.title}</a></p>
              <p>
                {this.props.location}
              </p>
              <div className="heart"></div>
          </div>
      </div>
    );
  }

}

const { number, string } = React.PropTypes

Envelope.propTypes = {
  url: string.isRequired,
  title: string.isRequired,
  location: string.isRequired,
  id: number,
  index: number.isRequired
}

export default Envelope;
