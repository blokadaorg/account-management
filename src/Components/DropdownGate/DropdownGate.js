import React from 'react';

import './DropdownGate.css';


class DropdownGate extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			dropdown_element: ''
		}
	}

	handleDropdownChange = event => {
		this.setState({
			dropdown_element: event.target.value
		})
	}

	render() {
		const { dropdown_element } = this.state
		return (
				<div>
        <select 
        className="dropdown-style"
        value={dropdown_element} 
        onChange={this.handleDropdownChange}>
          <option value="london">(Europe-West2)London</option>
          <option value="berlin">(Europe-West1)Berlin</option>
          <option value="washington">(USA-Central1)Washington</option>
				</select>
				</div>
		)
	}
}

export default DropdownGate