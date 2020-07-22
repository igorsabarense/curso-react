import React, { Component } from 'react';

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
            numero: this.props.numero || 0 
        };
	}

	render() {
		return <div>{this.props.numero}</div>;
	}
}

export default Display;
