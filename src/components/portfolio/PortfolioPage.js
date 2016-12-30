import React from 'react';
import toro from '../../images/toro-ipad.png';
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

//see if the index matches, then show
  handleClick(index) {
      this.setState({
        activeIndex: index
      });
      //console.log(this.props.selected);
  }


  render() {
    //data
    const portfolioItems = [
      {
        project: 'Toro Timecards Application',
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["ExtJS", "ColdFusion", "Microsoft SQL", "Sass"]
      },
      {
        project: 'Anthem, Inc. Intranet Re-design',
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "Accessibility", "JavaScript", "jQuery", "Cross-Browser Testing"]
      },
      {
        project: 'Cox Enterprises Intranet Re-design',
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "JavaScript", "jQuery", "Responsive Design", "Cross-Browser and Device Testing"]
      },
      {
        project: 'Lauren Beatty Personal Website',
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["React", "ES6", "HTML5", "CSS", "Animations", "JavaScript", "Responsive Design"]
      },
      {
        project: 'Rêve Academy Social Skills Assessment',
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["Angular", "Angular Charts", "Node", "Express", "MySQL", "EJS Templates", "Responsive Design"]
      },
      {
        project: 'Social Story Generator',
        backgroundImage: `url(${toro})`,
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
