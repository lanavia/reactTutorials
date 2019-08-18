import React, {Component} from 'react';

const validationComponent = (props) =>{
    return(
        <div>
            <input type="text" value={props.data} 
            onChange={props.changed} />
        </div>
    )
};
export default validationComponent;