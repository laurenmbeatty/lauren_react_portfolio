import React from 'react';
import toro from '../../images/toro-ipad.png';
import portfolio from '../../images/portfolio_004.png';
import cox from '../../images/cox-ipad3.png';
import anthem from '../../images/anthem-ipad2.png';
import reve from '../../images/reve-ipad.png';
import worm from '../../images/worm-ipad.png';
import PortfolioItem from './PortfolioItem';

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };

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
    const portfolioItems = [
      {
        project: 'Toro Timecards',
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["ExtJS", "ColdFusion", "Microsoft SQL", "Sass"]
      },
      {
        project: 'Anthem, Inc.',
        backgroundImage: `url(${anthem})`,
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "Accessibility", "JavaScript", "jQuery", "Cross-Browser Testing"]
      },
      {
        project: 'Cox, Inc.',
        backgroundImage: `url(${cox})`,
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "JavaScript", "jQuery", "Responsive Design", "Cross-Browser and Device Testing"]
      },
      {
        project: 'Personal Website',
        backgroundImage: `url(${portfolio})`,
        skillsStrengthened: ["React", "ES6", "HTML5", "CSS", "Animations", "JavaScript", "Responsive Design"]
      },
      {
        project: 'Rêve Academy',
        backgroundImage: `url(${reve})`,
        skillsStrengthened: ["Angular", "Angular Charts", "Node", "Express", "MySQL", "EJS Templates", "Responsive Design"]
      },
      {
        project: 'Silkworm Stories',
        backgroundImage: `url(${worm})`,
        skillsStrengthened: ["HTML", "CSS", "JavaScript", "jQuery", "Responsive Design"]
      }
   ];

    return (
      <main>
          <div className="portfolio-container">
            {portfolioItems.map((item, index, skillsStrengthened) => (
              <PortfolioItem {...item} {...skillsStrengthened} isActive={this.state.activeIndex===index} index={index} key={index} onClick={this.handleClick.bind(null, index, this)}/>
            ))}
          </div>
      </main>
    );
  };
};

export default PortfolioPage;
