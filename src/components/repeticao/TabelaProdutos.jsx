import React from 'react';
import produtos from '../../data/produtos';
import  './TabelaProdutos.css'

export default function TabelaProdutos(props) {
	return (
		<div className="TabelaProdutos">
			<table>
                <thead>
                <tr>
					<th> # </th>
					<th> Produto </th>
					<th> Preço </th>
				</tr>
                </thead>
				<tbody>
                {produtos.map((item, index) => {
					return (
						<tr key={index} className={index % 2 === 0 ? 'Par' : 'Impar'}>
							<td >{item.id}</td>
							<td >{item.nome}</td>
							<td >{'R$'+item.preco}</td>
						</tr>
					);
				})}
                </tbody>
				
			</table>
		</div>
    );
    
}
