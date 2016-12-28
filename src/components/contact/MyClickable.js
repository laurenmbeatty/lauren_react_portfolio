import React from 'react';


class MyClickable extends React.Component {

  handleClick() {
    this.props.onClick(this.props.index)
  }

  render () {
    return (
      <button type='button' className={this.props.isActive ? 'active' : 'album'} onClick={this.handleClick.bind(this)}>
        <span>{this.props.name}</span>
      </button>
    )
  }
}

export default MyClickable;
