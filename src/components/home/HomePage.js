import React from 'react';
import Typist from 'react-typist';

class HomePage extends React.Component {

  render() {
    return (
      <div className="address">
        <main>
          <Typist>
              <p>Lauren Beatty <br />
              Frontend Developer<br />
            <a href="mailto:lauren.m.beatty@gmail.com">lauren.m.beatty@gmail.com</a>
            </p>
         </Typist>
       </main>
      </div>
    );
  }
}
export default HomePage;
