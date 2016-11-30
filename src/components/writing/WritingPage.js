import React from 'react';


class WritingPage extends React.Component {
  render() {
    return (
      <main>
          <div className="writings-content-wrapper">
              <div className="envelope">
                  <div className="card">
                      <p><a href="https://collaborate2016.zerista.com/event/member/235430" target="_blank">Introduction to Oracle JET</a></p>
                      <p>
                        Collaborate 2016
                      </p>
                      <div className="heart"></div>
                  </div>
              </div>
              <div className="envelope">
                  <div className="card">
                      <p>
                        <a href="http://cfour.fishbowlsolutions.com/2016/07/12/oracle-jet-requirejs/" target="_blank">Oracle JET and RequireJS</a>
                      </p>
                      <p>
                        C4 Blog
                      </p>
                      <div className="heart"></div>
                  </div>
              </div>
              <div className="envelope">
                  <div className="card">
                      <p>
                        <a href="http://prairiecode.amegala.com/sessions/an-introduction-to-oracle-jet-javascript-extension-toolkit" target="_blank">Introduction to Oracle JET</a>
                      </p>
                      <p>Prairie.Code()</p>
                      <div className="heart"></div>
                  </div>
              </div>
              <div className="envelope">
                  <div className="card">
                      <p>
                        <a href="http://cfour.fishbowlsolutions.com/2016/02/26/favorite-things/" target="_blank">Ultimate Productivity</a>
                      </p>
                      <p>
                        C4 Blog
                      </p>
                      <div className="heart"></div>
                  </div>
              </div>
              <div className="envelope">
                  <div className="card">
                      <p>
                        <a href="http://cfour.fishbowlsolutions.com/2016/03/28/designers-introduction-oracle-jet/" target="_blank">Introduction to Oracle JET</a>
                      </p>
                      <p>
                        C4 Blog
                      </p>
                      <div className="heart"></div>
                  </div>
              </div>
          </div>
      </main>
    );
  }
}

export default WritingPage;
//This could be a stateless functional component, too
//having a className-based component at the top
//enables hot-reloading
