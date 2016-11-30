import React, { PropTypes } from 'react';
import './App.css';
import Menu from './components/common/Menu';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
