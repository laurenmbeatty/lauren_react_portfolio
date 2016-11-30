import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import WritingPage from './components/writing/WritingPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="portfolio" component={PortfolioPage} />
    <Route path="writing" component={WritingPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
);
