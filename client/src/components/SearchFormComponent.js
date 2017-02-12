import React, { Component } from 'react';
import OptionalFormComponent from './OptionalFormComponent';
import InputComponent from './InputComponent';
import StateDropdownComponent from './StateDropdownComponent';

class SearchFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      state: '',
      phone: '',
      email: '',
      linkedIn: '',
      facebook: '',
    };
  }

  handleSubmit() {}

  handleChange(e, property) {
    let tempObj = {};
    tempObj[property] = e.target.value
    e.preventDefault()

    this.setState(tempObj)
    console.log(this.state)
  };

  toggleOptions() {
    this.setState(
      {options: !this.state.options}
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>

        <InputComponent handleChange={this.handleChange.bind(this)} property={'firstName'} placeholder={"First Name"}/>

        <InputComponent handleChange={this.handleChange.bind(this)}  property={'lastName'} placeholder={"Last Name"}/>

        <InputComponent handleChange={this.handleChange.bind(this)} property={'email'} placeholder={"Email"}/>

        <InputComponent type="tel" handleChange={this.handleChange.bind(this)} property={'phone'} placeholder={"Phone"}/>

        <InputComponent handleChange={this.handleChange.bind(this)} property={'linkedIn'} placeholder={"linkedIn URL"}/>

        <InputComponent handleChange={this.handleChange.bind(this)} property={'facebook'} placeholder={"Facebook URL"}/>

        <StateDropdownComponent handleChange={this.handleChange.bind(this)} property={'state'} placeholder={"State"}/>

      </form>
    )
  }
};

export default SearchFormComponent;