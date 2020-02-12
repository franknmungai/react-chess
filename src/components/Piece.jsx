import React from 'react';

const Piece = props => {
	return (
		<span
			piece={props.cell}
			color={props.color}
			onClick={event => {
				// const color =
				//     isNaN(cell) && cell === cell.toUpperCase() ? 'b' : 'w';
				console.log(props.chess.moves({ square: 'g1' }));
				const successful = props.chess.makeMove(
					props.chess,
					props.cell.toString(),
					props.color,
					'b5'
				);

				if (successful) {
					props.chess.remove('a2');
					props.setFen(props.chess.fen()); //re-render component
				}
			}}
		>
			{props.cell}
		</span>
	);
};

export default Piece;
