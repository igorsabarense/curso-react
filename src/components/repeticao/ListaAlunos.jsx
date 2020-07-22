import React from 'react';
import alunos from '../../data/alunos';

export default function ListaAlunos(props) {
	return (
		<div>
			<ul>
				{alunos.map((item, index) => {
					return (
						<li key={index}>
							{item.nome} - {item.nota}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
