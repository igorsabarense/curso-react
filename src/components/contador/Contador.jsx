import React, { Component } from 'react';
import './Contador.css';
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numero: props.numeroInicial || 0,
			passo: this.props.passoInicial || 1
		};
	}

	inc = () => {
		this.setState({
			numero: this.state.numero + this.state.passo
		});
	};

	dec = () => {
		this.setState({
			numero: this.state.numero - this.state.passo
		});
	};
	
	setPasso = (novoPasso) => {
		this.setState({
			passo: novoPasso,
		})
	}

	render() {
		return (
			<div>
				<h2>Contador</h2>
				<Display numero={this.state.numero} />
				<PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
				<Botoes incrementar={this.inc} decrementar={this.dec} />
			</div>
		);
	}
}

export default Contador;
