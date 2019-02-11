import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({temperature:event.target.value});
  }
  render() {
    const temperature = this.state.temperature;
    return(
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange}/>
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

function BoilingVerdict(props){
  var value = props.celsius;
  if(value >= 100) {
    return <p>The water would boil.</p>;
  } else {
  return <p>The water would not boil.</p>;
  }
}