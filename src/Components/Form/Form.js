import React from 'react';

import './Form.css';


class Form extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			field_content: ''
		}
	}

	handleFieldContentChange = event => {
		this.setState({
			field_content: event.target.value
		})
	}

	render() {
		const { field_content } = this.state
		return (
			<form>
				<div>
					<input
            className="form-style"
						type="text"
						value={field_content}
						onChange={this.handleFieldContentChange}
					/>
				</div>
			</form>
		)
	}
}

export default Form