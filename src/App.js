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

 /*
 import Person from './Components/Person';
 
 state = {
    persons: [
      {name: 'lore', hobby:'leer'},
      {name: 'Raul', hobby:'dormir'},
      {name:'Soledad', hobby:'be mom'}
    ]
  }
  switchHandler = () =>{
    console.log('was clicked!');
  }
  nameChangeHandler = (event)=>{
    this.setState ({
      persons : [
        {name: 'Camila', hobby:'travel'},
        {name: event.target.value, hobby:'sleep'},
        {name:'Luna', hobby:'be mom'}
      ]
    })
  }


  render() {
    const style = {
      backgroundColor: 'grey',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>bienvenida</h1>
       
        <button 
          style={style}
          onClick={this.switchHandler}>Click</button>
        <Person name={this.state.persons[0].name} 
            hobby={this.state.persons[0].hobby} />
        <Person name={this.state.persons[1].name} 
            hobby={this.state.persons[1].hobby}/>
        <Person>My favorit color is : red</Person> 
        <Person name={this.state.persons[2].name} 
            hobby={this.state.persons[2].hobby}
            click={this.switchHandler.bind(this, 'Luciano')}
            changed={this.nameChangeHandler}
           />
        
        <Person />
      </div>
    );
  }
}
*/


