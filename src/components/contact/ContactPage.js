import React from 'react';

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: null
    }
  }

  handleClick(index) {
    this.setState({activeIndex: index})
  }

  render() {
    return (
      <main>
          <div className="contact-page-content">
              <p className="contact-page-description">I'm a frontend developer and serial learner working with a great team at <a href="http://www.fishbowlsolutions.com">Fishbowl Solutions</a>.</p>
              <p className="contact-page-description">I love being a developer. It gives me the chance to learn something new every day.</p>
              <div className="contact-form">
                  <div className="background-container">
                    <div className="image"><a href="mailto:lauren.m.beatty@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></div>
                  </div>
                  <div className="background-container">
                    <div className="image"><a href="https://github.com/laurenmbeatty" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></div>
                  </div>
                  <div className="background-container">
                    <div className="image"><a href="https://www.linkedin.com/in/lmbeatty/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></div>
                  </div>
                  <div className="background-container">
                    <div className="image"><a href="https://twitter.com/laurenbeatty13" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></div>
                  </div>
              </div>
          </div>
      </main>
    )
  }
}

export default ContactPage;
