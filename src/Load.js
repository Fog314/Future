import React from 'react';

class Load extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			error: null,
			isLoaded: false,
			items: [],
			generalTextContent: ['id', 'firstName', 'lastName', 'email', 'phone'],
		};
	}

	componentDidMount(props) {
		console.log(this.props.data);
	}
	render() {

		return (
			<div>Hello</div>
		);
	}
}
export default Load;