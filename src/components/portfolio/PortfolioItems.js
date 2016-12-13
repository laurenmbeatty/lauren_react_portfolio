import React from 'react';
//import toro from '../../images/toro-ipad.png';



const PortfolioItems = (props) => {

return (

<div className="portfolio-container">
  {portfolioItems.map(function(item, index){
    return <div className="portfolio-item" key={ index } data={ index } onClick={this.buttonClick}>
              <button key={ index } className={this.state.buttonState}>
                <div className="button-icon">
                  <i className={this.state.iconState}   id={ index }   aria-hidden="true"></i>
                </div>
              </button>
              <div className="portfolio-image" style={{background: item.backgroundImage }}>

              </div>
              <div className={this.state.skillsState}>
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
);
}
export default PortfolioItems;
