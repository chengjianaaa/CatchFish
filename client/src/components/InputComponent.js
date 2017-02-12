import React from 'react';

const InputComponent = (props) => {
  return (
    <input onChange={function(e){
        props.handleChange(e, props.property)
        }}
        placeholder={props.placeholder}
      />
  )
};

export default InputComponent;

   {/*
   import { FormGroup, FormControl } from 'react-bootstrap';

    <FormGroup controlId={props.placeholder}>
      <FormControl onChange={function(e){
        props.handleChange(e, props.property)
        }}
        placeholder={props.placeholder}
      />
    </FormGroup>*/}
