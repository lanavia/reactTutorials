import React, {Component} from 'react';

const userInput = (props) =>{
    return(
        <div>
            <input type="text" value={props.dataUser} 
            onChange={props.changed} />
        </div>
    )
};
export default userInput;