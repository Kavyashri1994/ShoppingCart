import React from 'react';
import ReactDOM from 'react-dom';

export default class DropDown extends React.Component {
  constructor(props){
    super(props);
    this.state = {value:'Mango'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event) {
      this.setState({value:event.target.value});
    }
    handleSubmit(event) {
       alert('Your favorite flavor is: ' + this.state.value);
       event.preventDefault();
    }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label> Select Your Fav Fruits:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value='Grape'>Grape</option>
          <option value='Orange'>Orange</option>
          <option value='Mango'>Mango</option>
          <option value='Apple'>Apple</option>
        </select>
        </label>
        <input type='submit' value='Submit'/>
      </form>
    );
  }
}