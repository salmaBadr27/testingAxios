import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.state = {
      user: ""
    }
    this.handleClick= this.handleClick.bind(this);
  }
 
  handleClick () {
    axios.get('https://api.github.com/users/salmaBadr27')
    .then(response => {
      console.log(response);
      console.log(response.headers);
      
      this.setState({user: response.data.name});}
    )
    .catch(error=>{console.log("error",error);
  })
  // alert('Success!');
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button'  onClick={this.handleClick}>Click Me</button>
        <p>{this.state.user}</p>
      </div>
    )
  }
}
export default App
