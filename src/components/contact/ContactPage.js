import React from 'react';
import MyClickable from './MyClickable';

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: null
    }
  }

  handleClick(index) {
    this.setState({activeIndex: index})
  }

  render() {
    return (
    <main>
      <div>
        <MyClickable name="a" index={0} isActive={this.state.activeIndex===0} onClick={this.handleClick.bind(this)}/>
        <MyClickable name="b" index={1} isActive={this.state.activeIndex===1} onClick={this.handleClick.bind(this)}/>
        <MyClickable name="c" index={2} isActive={this.state.activeIndex===2} onClick={this.handleClick.bind(this)}/>
      </div>
    </main>
  )
  }
}

export default ContactPage;
//This could be a stateless functional component, too
//having a class-based component at the top
//enables hot-reloading
