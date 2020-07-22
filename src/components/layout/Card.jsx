import React from 'react';
import './Card.css';

export default function Card(props) {
    const stylesheet = {
        backgroundColor: props.color || '#e9967a',
        borderColor: props.color || '#e9967a'
    }
    
    return (
		<div className="Card" style={stylesheet}> 
    		<div className="Title">{props.titulo}</div>
			<div className="Content"> {props.children} </div>
		</div>
	);
}
