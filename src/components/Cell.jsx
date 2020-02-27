import React from 'react';

const Cell = props => {
	return (
		<div className={`piece ${props.light ? 'light' : 'dark'}`}>
			<span
				// className={`piece ${props.light ? 'light' : 'dark'}`}
				piece={props.piece}
				color={props.color}
				onClick={() => props.onClick(props.pos, props.color)}
			>
				{props.piece}
			</span>
		</div>
	);
};
export default Cell;
