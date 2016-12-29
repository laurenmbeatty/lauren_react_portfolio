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
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["ExtJS  ", "ColdFusion  ", "Microsoft SQL  ", "Sass  "]
      },
      {
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["HTML  ", "CSS  ", "RequireJS  ", "JavaScript  ", "jQuery  ", "Responsive Design  "]
      },
      {
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["HTML  ", "CSS  ", "RequireJS  ", "JavaScript  ", "jQuery  ", "Responsive Design  "]
      },
      {
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["HTML  ", "CSS  ", "RequireJS  ", "JavaScript  ", "jQuery  ", "Responsive Design  "]
      },
      {
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["HTML  ", "CSS  ", "RequireJS  ", "JavaScript  ", "jQuery  ", "Responsive Design  "]
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
