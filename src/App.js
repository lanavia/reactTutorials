import React, { Component } from 'react';
import './App.css';

import Person from './Components/Person';

class App extends Component {
state = {
    persons: [
      {id:'1160', name: 'lore', hobby:'leer'},
      {id:'1161', name: 'Raul', hobby:'dormir'},
      {id:'1162', name:'Soledad', hobby:'be mom'}
    ],
    otherState: 'some other something',
    showPersons: false
  }
  switchHandler = () =>{
    console.log('was clicked!');
  }
  nameChangeHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{ return p.id==id;});

    this.setState ({
      persons : [
        {name: 'Camila', hobby:'travel'},
        {name: event.target.value, hobby:'sleep'},
        {name:'Luna', hobby:'be mom'}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
    console.log(' showPerson value :',this.state.showPersons);
  }

  deletePersonHandler = (personIndex) => {
    console.log('was clicked deletePersonHandler!');
    //const persons = this.state.persons.slice();
    //usando spreads
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  countLengthTextHandler = (event)=>{
    console.log('countLengthTextHandler' + event.target.value)
  }

  render() {
    const style = {
      backgroundColor: 'grey',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>

          {this.state.persons.map((person, index) =>{
            return <Person  click={()=>this.deletePersonHandler(index)}
                            name={person.name} 
                            hobby={person.hobby}
                            key={person.id} />
          })}
          
        
          <Person />
        </div>
      )
    }
    return (
      <div className="App">
        <h1>bienvenida</h1>
       
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Click</button>
        {persons}
        <br/>
        <input type="text" value="algo a escribir" onChange={this.countLengthTextHandler}/>
        <p>length of text</p>
      </div>
    );
  }
}
export default App;

 

