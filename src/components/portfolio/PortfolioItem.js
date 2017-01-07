import React from 'react';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.onClick(this.props.index);
  }

  render() {
    let skillsStrengthened = [...this.props.skillsStrengthened];
    return (
      <div className="portfolio-item" onClick={this.handleClick.bind(this)}>
          <button className={this.props.isActive ? 'portfolio-button active' : 'portfolio-button'}>
            <div className="button-icon">
              <i className={this.props.isActive ? 'fa fa-plus active' : 'fa fa-plus'} aria-hidden="true"></i>
            </div>
          </button>
          <div className="portfolio-image" style={{ background:this.props.backgroundImage }}>

          </div>
          <div className={this.props.isActive ? 'portfolio-skills active' : 'portfolio-skills'}>
              <div className="portfolio-skills-container">
                  <h2>{this.props.project}</h2>
                  <p>
                      Skills Strengthened:
                  </p>
                  <ul>
                    {skillsStrengthened.map((skillsStrengthened, index) => (
                      <li key={index}>{this.props.skillsStrengthened[index]}</li>
                    ))}
                  </ul>
              </div>
          </div>
      </div>
    );
  };
};

const { string } = React.PropTypes;

PortfolioItem.propTypes = {
     skill: string,
     project: string,
     backgroundImage: string,
     buttonState: string
}

export default PortfolioItem;
