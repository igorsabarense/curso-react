import React, { cloneElement } from 'react';

export default function Familia(props) {
	return (
		<div>
            <h2> Família </h2>
			{React.Children.map(props.children, (child) => {
				return cloneElement(child, props);
			})}
		</div>
	);
}
