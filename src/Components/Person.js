import React, {Component} from 'react';
import './Person.css';
const  person =(props) => {
    //return <p>I'm Lorena and I am {Math.floor(Math.random()*30)} years old</p>
    //return <p>I received the name {props.name} and the age {props.hobbie}</p>;
//now we are test the received information inside the tag
return (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and my hobby is {props.hobby}</p>
        <p>{props.children}</p>
        <input type="text" 
        
        onChange={props.changed}/>
    </div>
)

};

export default person;