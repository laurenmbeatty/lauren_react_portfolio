import React from 'react';
import { Link, IndexLink } from 'react-router';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 'site-header',
      activeState: 'hamburger hamburger--emphatic js-hamburger',
      showMenu: 'slidedown-menu'
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
        if (this.state.visible === 'site-header'){
            this.setState({
              visible: 'site-header visible',
              activeState: 'hamburger hamburger--emphatic js-hamburger is-active',
              showMenu: 'slidedown-menu active'
            });

        } else {
            this.setState({
              visible: 'site-header',
              activeState: 'hamburger hamburger--collapse js-hamburger',
              showMenu: 'slidedown-menu'
            });
        }
  }
  render() {
    return(
      <header className={this.state.visible} onClick={this.handleClick}>
        <div className="menu-toggle">
          <button className={this.state.activeState} type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className={this.state.showMenu}>
            <nav className="main-nav">
                <ul className="nav-list">
                    <li>
                        <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    </li>
                    <li>
                        <Link to="/portfolio" activeClassName="active">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/writing" activeClassName="active">Writing</Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    );
  }
}


export default Menu;
