import React from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece';

const Cell = props => {
	return (
		<div
			className={`piece ${props.light ? 'light' : 'dark'} ${
				props.isPossibleMove ? 'possible-move' : ''
			}`}
			onDragOver={event => event.preventDefault()}
			onDrop={event => props.onDrop(props.pos)} //Get the position of the cell we drop at
		>
			<span onDragOver={() => props.onDragOver(props.pos)}>
				<Piece
					piece={props.piece}
					color={props.color}
					pos={props.pos}
					onDragStart={(piece, pos) => props.onDragStart(piece, pos)} //will be called with two params: pass them to parent
				/>
			</span>
		</div>
	);
};

Cell.propTypes = {
	light: PropTypes.bool.isRequired, //defines whether the square is black or white
	piece: PropTypes.string.isRequired, //the piece the cell currently holds e.g b(bishop)
	color: PropTypes.string.isRequired, //The color or piece either b or w
	pos: PropTypes.string.isRequired, // e1
	onDragStart: PropTypes.func.isRequired,
	onDrop: PropTypes.func.isRequired
};

export default Cell;
