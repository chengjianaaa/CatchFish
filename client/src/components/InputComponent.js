import React, { Component } from 'react';
import './inputs.css';


const InputComponent = (props) => {
  return (
    <input
      onChange={function(e){
        props.handleChange(e, props.property)
      }}
      placeholder={props.placeholder}
    />
  )
};

export default InputComponent;

