import React from 'react';
import { Link, IndexLink } from 'react-router';

const Slidedown = () => {
  return (
    <div className="slidedown-menu">
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
  )
}

export default Slidedown;
