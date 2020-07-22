import './Input.css';
import React, { useState } from 'react';

export default function Input(props) {


	const [ valor, setValor ] = useState('Inicial');

    function handleChange (e) {
        setValor(e.target.value)
    }
    

	return (
		<div className="Input">
            <h2>{valor}</h2>
			<input value={valor}  onChange={handleChange}/>
		</div>
	);
}
