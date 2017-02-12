import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap'
//TODO: Reimplement as Typeahead
// html from https://gist.github.com/jwmalara/11190014

const StateDropdownComponent = (props) => {
  return (
    <DropdownButton
      id={props.property}
      title="State"
      onSelect={function(e){
        props.handleChange(e, props.property)
      }}
    >
      <MenuItem eventKey="AL">Alabama</MenuItem>
      <MenuItem eventKey="AK">Alaska</MenuItem>
      <MenuItem eventKey="AZ">Arizona</MenuItem>
      <MenuItem eventKey="AR">Arkansas</MenuItem>
      <MenuItem eventKey="CA">California</MenuItem>
      <MenuItem eventKey="CO">Colorado</MenuItem>
      <MenuItem eventKey="CT">Connecticut</MenuItem>
      <MenuItem eventKey="DE">Delaware</MenuItem>
      <MenuItem eventKey="FL">Florida</MenuItem>
      <MenuItem eventKey="GA">Georgia</MenuItem>
      <MenuItem eventKey="HI">Hawaii</MenuItem>
      <MenuItem eventKey="ID">Idaho</MenuItem>
      <MenuItem eventKey="IL">Illinois</MenuItem>
      <MenuItem eventKey="IN">Indiana</MenuItem>
      <MenuItem eventKey="IA">Iowa</MenuItem>
      <MenuItem eventKey="KS">Kansas</MenuItem>
      <MenuItem eventKey="KY">Kentucky</MenuItem>
      <MenuItem eventKey="LA">Louisiana</MenuItem>
      <MenuItem eventKey="ME">Maine</MenuItem>
      <MenuItem eventKey="MD">Maryland</MenuItem>
      <MenuItem eventKey="MA">Massachusetts</MenuItem>
      <MenuItem eventKey="MI">Michigan</MenuItem>
      <MenuItem eventKey="MN">Minnesota</MenuItem>
      <MenuItem eventKey="MS">Mississippi</MenuItem>
      <MenuItem eventKey="MO">Missouri</MenuItem>
      <MenuItem eventKey="MT">Montana</MenuItem>
      <MenuItem eventKey="NE">Nebraska</MenuItem>
      <MenuItem eventKey="NV">Nevada</MenuItem>
      <MenuItem eventKey="NH">New Hampshire</MenuItem>
      <MenuItem eventKey="NJ">New Jersey</MenuItem>
      <MenuItem eventKey="NM">New Mexico</MenuItem>
      <MenuItem eventKey="NY">New York</MenuItem>
      <MenuItem eventKey="NC">North Carolina</MenuItem>
      <MenuItem eventKey="ND">North Dakota</MenuItem>
      <MenuItem eventKey="OH">Ohio</MenuItem>
      <MenuItem eventKey="OK">Oklahoma</MenuItem>
      <MenuItem eventKey="OR">Oregon</MenuItem>
      <MenuItem eventKey="PA">Pennsylvania</MenuItem>
      <MenuItem eventKey="RI">Rhode Island</MenuItem>
      <MenuItem eventKey="SC">South Carolina</MenuItem>
      <MenuItem eventKey="SD">South Dakota</MenuItem>
      <MenuItem eventKey="TN">Tennessee</MenuItem>
      <MenuItem eventKey="TX">Texas</MenuItem>
      <MenuItem eventKey="UT">Utah</MenuItem>
      <MenuItem eventKey="VT">Vermont</MenuItem>
      <MenuItem eventKey="VA">Virginia</MenuItem>
      <MenuItem eventKey="WA">Washington</MenuItem>
      <MenuItem eventKey="WV">West Virginia</MenuItem>
      <MenuItem eventKey="WI">Wisconsin</MenuItem>
      <MenuItem eventKey="WY">Wyoming</MenuItem>
    </DropdownButton>
  );
}

export default StateDropdownComponent