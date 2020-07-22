import React from 'react';

export default function IndiretaFilho(props) {
	const gerarIdade = () => parseInt((Math.random() * (60-18)) + 18) ;
	const gerarNerd = () => Math.random() > 0.5
	return (
		<div>
			<button onClick={(e) => props.onClick('João', gerarIdade(), gerarNerd())}>Fornecer informações</button>
		</div>
	);
}
