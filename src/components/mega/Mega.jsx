import React, { Component } from 'react';

class Mega extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numerosMegaSena: [],
			range: 0
		};
	}

	geraMegaSena(range) {
		let maxRange = 60;
		let arrayMegaSena = [];
		let i = 0;

		while (i < range) {
			let numero = parseInt(Math.random() * (maxRange - 1) + 1);
			//não permitir números iguais no array
			arrayMegaSena.includes(numero) ? i-- : arrayMegaSena.push(numero);
			i++;
		}
		arrayMegaSena = arrayMegaSena.sort((n1,n2) => n1-n2);
		this.setState({
			numerosMegaSena: arrayMegaSena
		});
	}

	render() {
		return (
			<div>
				<h2>MegaSena</h2>
				<p>{this.state.numerosMegaSena.toString() || 0}</p>
				<button className="btn"
					onClick={() => {
						this.geraMegaSena(this.props.range);
					}}
				>
					Gerar Números
				</button>
			</div>
		);
	}
}

export default Mega;
