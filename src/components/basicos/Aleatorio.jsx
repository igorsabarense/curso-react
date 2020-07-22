import React from 'react';

export default function Aleatorio(props) {
	const { max, min } = props;
	let randomNum = parseInt(Math.random() * (max - min) + min);
	return (
		<div>
			<h2> Gerador de Números Aleatórios </h2>
			<p> Valor mínimo: {min}</p>
			<p> Valor máximo: {max}</p>
			<p>
				<strong>Valor aleatório: {randomNum}</strong>
			</p>
		</div>
	);
}
