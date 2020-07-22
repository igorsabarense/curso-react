import React from 'react';

export default function ComParametro(props) {
	const status = props.nota >= 60 ? 'Aprovado' : 'Reprovado';
	return (
		<div>
			<h2>
				{props.titulo} 
        	</h2>
			<h3>
				<strong>
					{props.aluno} tem a nota final de {props.nota} <p>{status}</p> 
				</strong>
			</h3>
		</div>
	);
}
