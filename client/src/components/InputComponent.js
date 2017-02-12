import React, { Component } from 'react';

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

