import React, { Component } from 'react';
import './App.css';


import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

 
class App extends Component {
  state = {
    paragraph:'length of text',
    text: 'type a text' ,
    lengthOfText: 0
  }
  textChangeHandler = (event)=>{
    this.setState ({
      text: event.target.value
      
    })
  }
  render(){
  return(
    <div>
      <h1>homework 2</h1>
      <input type="text"
          value={this.state.text}
          onChange={this.textChangeHandler}
      />
      <p>{this.state.text}</p>
    </div>
  );
  }
}
  export default App;

 

