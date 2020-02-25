import React from 'react';

const Piece = props => {
	return (
		<span
			className={`piece ${props.light ? 'light' : 'dark'}`}
			piece={props.piece}
			color={props.color}
			onClick={() => props.onClick(props.pos, props.color)}
		>
			{props.piece}
		</span>
	);
};
export default Piece;
