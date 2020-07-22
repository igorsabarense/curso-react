import React, { Component } from 'react';
import './Contador.css'

class Contador extends Component {
	constructor(props) {
		super(props);

		this.state = {
            numero: props.numeroInicial || 0, 
            passo: this.props.passoInicial || 2
		};
	}

	inc = () => {
		this.setState({
			numero: this.state.numero + this.state.passo,
		});
    }
    
    dec = () => {
		this.setState({
			numero: this.state.numero - this.state.passo,
		});
	}

	render() {
		return (
			<div> 
				<h2>Contador</h2>
				<p>{this.state.numero}</p>
                <div className="Contador"> 
                    <label htmlFor="passoInput"> Incremeto: </label>
                    <input 
                        className="input"
                        id="passoInput"
                        value={this.state.passo}
                        type="number"
                        onChange={(novoPasso)=>{
                            this.setState({
                                passo: +novoPasso.target.value,
                            });         
                        }}
                    />
                </div>
				<button className="btn" onClick={this.inc}>+</button>
                <button className="btn" onClick={this.dec}>-</button>
			</div>
		);
	}
}

export default Contador;
