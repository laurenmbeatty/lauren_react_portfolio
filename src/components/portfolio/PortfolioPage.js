import React from 'react';
import toro from '../../images/toro-ipad.png';
import classNames from 'classnames';
//import PortfolioItem from './PortfolioItem';

const propTypes = {
   skillState: React.PropTypes.string,
   backgroundImage: React.PropTypes.string,
   buttonState: React.PropTypes.string,
   iconState: React.PropTypes.string,
   skillsState: React.PropTypes.string,
   skill: React.PropTypes.string,
   selected: React.PropTypes.bool
}

const defaultProps = {
  skillState: 'portfolio-skills',
  buttonState: 'portfolio-button',
  iconState: 'fa fa-plus',
  skillsState: 'portfolio-skills',
  selected: false
}
class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      selected: false
    };

    // This binding is necessary to make `this` work in the callback
    this.buttonClick = this.buttonClick.bind(this);
  }

//see if the index matches, then show
  buttonClick(event, item, index) {

      if(this.state.selected === true){
        this.setState({
          selected: false
        });
      } else {
        this.setState({
          selected: true
        });
      }

      console.log(this.props.selected);

  }


  render() {
    let btnClass = classNames({
      'portfolio-button': true,
      'portfolio-button active': this.state.selected
    });

    let iconClass = classNames({
      'fa fa-plus': true,
      'fa fa-plus active': this.state.selected
    });

    let portfolioClass = classNames({
      'portfolio-skills': true,
      'portfolio-skills active': this.state.selected
    });

    const portfolioItems = [
      {
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["ExtJS", "ColdFusion", "Microsoft SQL", "Sass"]
      },
      {
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "JavaScript", "jQuery", "Responsive Design"]
      },
      {
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "JavaScript", "jQuery", "Responsive Design"]
      },
      {
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "JavaScript", "jQuery", "Responsive Design"]
      },
      {
        backgroundImage: `url(${toro})`,
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "JavaScript", "jQuery", "Responsive Design"]
      },
   ];

    return (
      <main>
          <div className="portfolio-container">
            {portfolioItems.map(function(item, index){
              return <div className="portfolio-item" id={`item-${index}`} index={index} key={ index } selected={ this.state.activeIndex === index } onClick={(key) => this.buttonClick(index)}>
                        <button className={btnClass} selected={ this.state.activeIndex === index }>
                          <div className="button-icon">
                            <i className={iconClass} selected={ this.state.activeIndex === index } aria-hidden="true"></i>
                          </div>
                        </button>
                        <div className="portfolio-image" style={{background: item.backgroundImage }}>

                        </div>

                        <div className={portfolioClass} selected={ this.state.activeIndex === index }>
                            <div className="portfolio-skills-container">
                                <p>
                                    Skills Strengthened:
                                </p>
                                <ul>
                                  {portfolioItems[index].skillsStrengthened.map(function(skill, index){
                                    return <li key={ index }>{skill}</li>
                                  }, this)}

                                </ul>
                            </div>
                        </div>
                    </div>
            }, this)}
          </div>
      </main>
    );

  }



}

PortfolioPage.propTypes = propTypes;
PortfolioPage.defaultProps = defaultProps;

export default PortfolioPage;
