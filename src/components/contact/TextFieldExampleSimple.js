import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const TextFieldExampleSimple = () => (
  <div className="contact-form">
    <TextField
      hintText="Your Name"
      floatingLabelText="Please enter your name"
    /><br />
    <TextField
      hintText="Your Email"
      floatingLabelText="Please enter your email address"
    /><br />
    <TextField
        hintText="Message"
        floatingLabelText="Send me a message"
        multiLine={true}
        rows={5}
      /><br />
    <RaisedButton label="Secondary" secondary={true} style={style} />
  </div>
);

export default TextFieldExampleSimple;
