import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default function IndiretaPai(props) {
	const [ nome, setNome ] = useState('?');
	const [ idade, setIdade ] = useState(0);
	const [ nerd, setNerd ] = useState(false);

	function fornecerInformacoes(nome, idade, nerd) {
		setNome(nome);
		setIdade(idade);
		setNerd(nerd);
	}

	return (
		<div>
			<div>{nome} <strong>{idade}</strong> {nerd ? 'Nerd!' : 'Não é Nerd!'}</div>
			<IndiretaFilho onClick={fornecerInformacoes} />
		</div>
	);
}
