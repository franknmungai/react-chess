import React from 'react';
import Piece from './Piece';

const Cell = props => {
	return (
		<div className={`piece ${props.light ? 'light' : 'dark'}`}>
			<span onClick={() => props.onClick(props.pos, props.color)}>
				<Piece piece={props.piece} color={props.color} pos={props.pos} />
			</span>
		</div>
	);
};
export default Cell;
