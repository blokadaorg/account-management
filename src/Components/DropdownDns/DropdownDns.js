import React from 'react';

import './DropdownDns.css';


class DropdownDns extends React.Component {
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
          <option value="cloudflare">Cloudflare</option>
          <option value="google">Google</option>
          <option value="opendns">OpenDNS</option>
				</select>
				</div>
		)
	}
}

export default DropdownDns