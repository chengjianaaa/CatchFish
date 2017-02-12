import React, { Component } from 'react';
import InputComponent from './InputComponent';
import StateDropdownComponent from './StateDropdownComponent';
import Dropzone from 'react-dropzone';


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
      facebook: '',
      image: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!', this.state)
    console.log('E', e.target)
  }

  handleChange(e, property) {
    let tempState = {};
    tempState[property] = e.target.value
    e.preventDefault()

    this.setState(tempState)
    console.log(this.state)
  };

  toggleOptions() {
    this.setState(
      {options: !this.state.options}
    );
  };

  onImageDrop(image){
    console.log(image);
    this.setState({image: image});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>

        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          <p>Drop an image!</p>
        </Dropzone>

        <InputComponent handleChange={this.handleChange.bind(this)} property={'firstName'} placeholder={"First Name"}/>

        <InputComponent handleChange={this.handleChange.bind(this)}  property={'lastName'} placeholder={"Last Name"}/>

        <InputComponent handleChange={this.handleChange.bind(this)} property={'email'} placeholder={"Email"}/>

        <InputComponent type="tel" handleChange={this.handleChange.bind(this)} property={'phone'} placeholder={"Phone"}/>

        <InputComponent handleChange={this.handleChange.bind(this)} property={'linkedIn'} placeholder={"linkedIn URL"}/>

        <InputComponent handleChange={this.handleChange.bind(this)} property={'facebook'} placeholder={"Facebook URL"}/>

        <StateDropdownComponent handleChange={this.handleChange.bind(this)} property={'state'} placeholder={"State"}/>

        <input type="submit" value="Submit" />

      </form>
    )
  }
};

export default SearchFormComponent;