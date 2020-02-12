import React, { useState } from 'react';
import Chess from 'chess.js';
import Board from './components/Board';
import './App.css';

const range = (min, max) =>
	Array.from({ length: max - min + 1 }, (_, i) => min + i);

//*Create an array representation of the board.
const createBoard = fen => {
	//Create a string representation of the board.
	const fenItems = fen.replace(' ', '/').split('/'); //rows
	const files = fenItems.slice(0, 8); //['rnbqkbnr', 'pppppppp', 8,8,8,8,'PPPPPPPP','RNBQKBNR']

	let stringBoard = files.join(''); //rnbqkbnrpppppppp8888PPPPPPPPRNBQKBNR

	let localBoard = Array.from(stringBoard);

	Array.from(stringBoard).forEach((char, index) => {
		if (!isNaN(+char)) {
			localBoard.splice(index, 1, range(1, char).fill(1));
		}
	});

	return localBoard.flatMap(num => num);
};

//Make a move and return a new fen
const makeMove = (chess, piece, color, position) => {
	//takes the chess object
	return chess.put({ type: piece, color }, position);
};

const App = props => {
	//The FEN representation of the board. Stored in state
	const [fen, setFen] = useState(
		'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
	);

	console.log(createBoard(fen));

	const chess = new Chess(fen);
	const board = createBoard(fen);
	console.log(chess.ascii());

	// ? Creating the chess pieces
	let markup = board.map((cell, index) => (
		<span
			className="piece"
			piece={cell}
			key={index}
			onClick={event => {
				const color = isNaN(cell) && cell === cell.toUpperCase() ? 'b' : 'w';
				console.log(chess.moves({ square: 'g1' }));
				const successful = makeMove(chess, cell.toString(), color, 'b5');

				if (successful) {
					chess.remove('a2');
					setFen(chess.fen()); //re-render component
				}
			}}
		>
			{cell}
		</span>
	));

	return <Board>{markup}</Board>;
};

export default App;
