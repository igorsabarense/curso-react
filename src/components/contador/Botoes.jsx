import React, { Component } from 'react';

class Botoes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<button className="btn" onClick={this.props.incrementar}>
					+
				</button>
				<button className="btn" onClick={this.props.decrementar}>
					-
				</button>
			</div>
		);
	}
}

export default Botoes;
