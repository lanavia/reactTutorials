import React, { Component } from 'react';
import './App.css';


import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    dataUser: [
      {username:'lore'}
    ]
  }
  userNameChangeHandler = (event)=>{
    this.setState ({
      dataUser: [
        {username:event.target.value}
      ]
    })
  }
  render(){
  return(
    <div>
      <h1>homework 1</h1>
      <UserInput dataUser={this.state.dataUser[0].username}
      click={this.userNameChangeHandler.bind(this)}
      changed={this.userNameChangeHandler}
      />
      <UserOutput username={this.state.dataUser[0].username}/>
    </div>
  );
  }
}
  export default App;

 

