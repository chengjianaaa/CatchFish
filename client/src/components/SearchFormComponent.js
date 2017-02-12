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
      <div className="flex-container">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="flex-container horiz main">
          <div className="flex-item imageDrop ">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}
              className="flex-item dropzone">
              <p>Drop an image or click to upload</p>
            </Dropzone>
          </div>

          <div className="inputs flex-container vert">
            <div className="flex-container horiz">
              <InputComponent handleChange={this.handleChange.bind(this)} property={'firstName'} className="flex-item" placeholder={"First Name"}/>

              <InputComponent handleChange={this.handleChange.bind(this)}  property={'lastName'} className="flex-item" placeholder={"Last Name"}/>
            </div>

            <InputComponent handleChange={this.handleChange.bind(this)} property={'email'} className="flex-item full" placeholder={"Email"}/>

            <InputComponent handleChange={this.handleChange.bind(this)} property={'facebook'} className="flex-item full" placeholder={"Facebook URL"}/>

            <div className="flex-container horiz">
              <InputComponent type="tel" handleChange={this.handleChange.bind(this)} property={'phone'} className="flex-item" placeholder={"Phone"}/>

              <StateDropdownComponent handleChange={this.handleChange.bind(this)} property={'state'} className="flex-item dropdown" placeholder={"State"}/>
            </div>

            <div className = "flex-container horiz">
              <input type="submit" value="Submit" className="flex-item submit" />
            </div>
          </div>

        </div>

      </form>
      </div>
    )
  }
};

export default SearchFormComponent;