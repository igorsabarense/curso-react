import React, { Component } from 'react';

class PassoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			passo : this.props.passo || 1
		};
	}

	render() {
		return (
			<div className="Contador">
				<label htmlFor="passoInput"> Incremeto: </label>
				<input
					className="input"
					id="passoInput"
					value={this.state.passo}
					type="number"
					onChange={(novoPasso) => {
						this.setState({
							passo: this.props.setPasso(+novoPasso.target.value)
						});
					}}
				/>
			</div>
		);
	}
}

export default PassoForm;
