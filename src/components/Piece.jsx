import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import bB from '../images/bB.png';
import bK from '../images/bK.png';
import bN from '../images/bN.png';
import bP from '../images/bP.png';
import bQ from '../images/bQ.png';
import bR from '../images/bR.png';
import wB from '../images/wB.png';
import wK from '../images/wK.png';
import wN from '../images/wN.png';
import wP from '../images/wP.png';
import wQ from '../images/wQ.png';
import wR from '../images/wR.png';

//* Movable piece of the game

const Piece = props => {
	const element = useRef();
	const nameExpression = `${
		props.color
	}${props.piece.toString().toUpperCase()}`; //e.g bK -- black king

	return (
		<img
			width="70%"
			height="50%"
			draggable="true"
			src={
				nameExpression === 'bB'
					? bB
					: nameExpression === 'bK'
					? bK
					: nameExpression === 'bN'
					? bN
					: nameExpression === 'bP'
					? bP
					: nameExpression === 'bQ'
					? bQ
					: nameExpression === 'bR'
					? bR
					: nameExpression === 'wB'
					? wB
					: nameExpression === 'wK'
					? wK
					: nameExpression === 'wN'
					? wN
					: nameExpression === 'wP'
					? wP
					: nameExpression === 'wQ'
					? wQ
					: nameExpression === 'wR'
					? wR
					: ''
			}
			alt=""
			ref={element}
			onDragStart={event => {
				props.onDragStart(props.piece, props.pos); //Pass data to main component
				setTimeout(
					() => console.log((element.current.style.display = 'none')), //hide element
					5
				);
			}}
			onDrop={() => {
				// props.onDrop(props.)
			}}
			onDragEnd={() => (element.current.style.display = 'inline')}
		/>
	);
};

Piece.propTypes = {
	piece: PropTypes.string.isRequired, //the piece the cell currently holds e.g b(bishop)
	color: PropTypes.string.isRequired, //The color or piece either b or w
	pos: PropTypes.string.isRequired // e1
};

export default Piece;
