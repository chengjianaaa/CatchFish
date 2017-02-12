import React, { Component } from 'react';
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
      country: '',
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
        <InputComponent handleChange={this.handleChange.bind(this)} property={'firstName'} label={"First Name: "}/>
        <InputComponent handleChange={this.handleChange.bind(this)}  property={'lastName'} label={"Last Name: "}/>
        <InputComponent handleChange={this.handleChange.bind(this)} property={'email'} label={"Email: "}/>
        <InputComponent handleChange={this.handleChange.bind(this)} property={'phone'} label={"Phone: "}/>

        <StateDropdownComponent handleChange={this.handleChange.bind(this)} property={'state'} label={"State: "}/>

        <InputComponent handleChange={this.handleChange.bind(this)} property={'country'} label={"Country: "}/>
        <InputComponent handleChange={this.handleChange.bind(this)} property={'linkedIn'} label={"linkedIn URL: "}/>
        <InputComponent handleChange={this.handleChange.bind(this)} property={'facebook'} label={"Facebook URL: "}/>
      </form>
    )
  }
};

export default SearchFormComponent;