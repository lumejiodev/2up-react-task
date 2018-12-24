import React from 'react';

function Input(props)  {
    return (
        <div className="input-block">
            <label className="label" htmlFor={props.id}>{props.title}</label>
            <input className="input" id={props.id}></input>
        </div>
    );
}

export default Input;