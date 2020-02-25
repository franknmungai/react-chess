import React, { useState } from 'react';
import Chess from 'chess.js';
import Board from './components/Board';
import { lightSquare, createBoard, createFenArray } from './functions/game';
import './App.css';
import Piece from './components/Piece';

//Make a move and return a new fen
// const makeMove = (chess, piece, color, position) => {
// 	//takes the chess object
// 	return chess.put({ type: piece, color }, position);
// };

const App = props => {
	//The FEN representation of the board. Stored in state
	const [fen, setFen] = useState(
		'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
	);

	const chess = new Chess(fen);
	const board = createBoard(createFenArray(fen));
	console.log(chess.ascii());
	console.log(board);

	// ? Creating the chess pieces
	let markup = board.map((cell, index) => (
		<Piece
			piece={cell.piece}
			pos={cell.name}
			key={index}
			light={lightSquare(index + 1)}
			color={
				isNaN(cell.piece)
					? cell.piece === cell.piece.toUpperCase()
						? 'w'
						: 'b'
					: 'e'
			}
			onClick={(pos, color) => {
				console.log(pos, color);
				chess.put({ type: 'p', color: 'w' }, 'a3'); //TODO:Check if board is updated when fen changes
			}}
		/>
	));

	return <Board>{markup}</Board>;
};

export default App;
