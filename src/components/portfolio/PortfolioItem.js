import React from 'react';
//import toro from '../../images/toro-ipad.png';

class PortfolioItem extends React.Component {

  handleClick(index) {
    this.props.onClick(this.props.index);
  }

  render() {

    return (
      <div className="portfolio-item" onClick={this.handleClick.bind(this)}>
          <button className={this.props.isActive ? 'portfolio-button active' : 'portfolio-button'}>
            <div className="button-icon">
              <i className={this.props.isActive ? 'fa fa-plus' : 'fa fa-plus active'} aria-hidden="true"></i>
            </div>
          </button>
          <div className="portfolio-image" style={{ background:this.props.backgroundImage }}>

          </div>
          <div className={this.props.isActive ? 'portfolio-skills' : 'portfolio-skills active'}>
              <div className="portfolio-skills-container">
                  <p>
                      Skills Strengthened:
                  </p>
                  <ul>
                    <li>{this.props.skill}</li>
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
     backgroundImage: string,
     buttonState: string,
     iconState: string,
     skillsState: string
}

export default PortfolioItem;
