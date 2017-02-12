import React, { Component } from 'react';

const InputComponent = (props) => {
  return (
    <div>
    <label>
      {props.label}
      <input onChange={function(e){
        props.handleChange(e, props.property)}} placeholder={props.placeholder}/>
    </label>
    </div>
  )
};

export default InputComponent;

