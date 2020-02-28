import React from 'react';
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
import wR from '../images/wK.png';

const Piece = props => {
	const nameExpression = `${
		props.color
	}${props.piece.toString().toUpperCase()}`;
	console.log(nameExpression);
	return (
		<img
			width="70%"
			height="50%"
			draggable="true"
			// src={`../images/${props.color}${props.piece}`}
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
			// style={{ backgroundImage: 'url("../images/bB.png")' }}
		/>
	);
};

export default Piece;
