import React from 'react';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: 'portfolio-button',
      iconState: 'fa fa-plus',
      skillsState: 'portfolio-skills'
    };

    // This binding is necessary to make `this` work in the callback
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick() {
        if (this.state.buttonState === 'portfolio-button'){
            this.setState({
              buttonState: 'portfolio-button active',
              iconState: 'fa fa-plus active',
              skillsState: 'portfolio-skills active'
            });

        } else {
            this.setState({
              buttonState: 'portfolio-button',
              iconState: 'fa fa-plus',
              skillsState: 'portfolio-skills'
            });
        }
  }
  render() {
    const portfolioItems = [
      {
        backgroundImage: '../public/images/toro-ipad.png',
        skillsStrengthened: ["ExtJS", "ColdFusion", "Microsoft SQL", "Sass"]
      },
      {
        backgroundImage: '../public/images/toro-ipad.png',
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "JavaScript", "jQuery", "Responsive Design"]
      },
      {
        backgroundImage: '../public/images/toro-ipad.png',
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "JavaScript", "jQuery", "Responsive Design"]
      },
      {
        backgroundImage: '../public/images/toro-ipad.png',
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "JavaScript", "jQuery", "Responsive Design"]
      },
      {
        backgroundImage: '../public/images/toro-ipad.png',
        skillsStrengthened: ["HTML", "CSS", "RequireJS", "JavaScript", "jQuery", "Responsive Design"]
      },
   ];

   return (
     <div className="portfolio-container">
       {portfolioItems.map(function(item, index){
         return <div className="portfolio-item" key={ index }>
                   <button className={this.state.buttonState} onClick={this.buttonClick}>
                     <div className="button-icon">
                       <i className={this.state.iconState} aria-hidden="true"></i>
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
                             })}

                           </ul>
                       </div>
                   </div>
               </div>
           </div>
     })}
   );
  }
}

export default PortfolioItem;
