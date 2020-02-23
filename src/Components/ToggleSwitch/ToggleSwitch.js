import React, { Component } from "react";
import Switch from "react-switch";
 
class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
        <Switch 
        onChange={this.handleChange} 
        checked={this.state.checked}
        height={15}
        width={28}
        uncheckedIcon={false}
        checkedIcon={false}
        offColor={'#c4cedf'}
        onColor={'#fe5810'}
        />
    );
  }
}

export default ToggleSwitch;