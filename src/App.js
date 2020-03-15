import React, { useState, useRef } from 'react';
import Chess from 'chess.js';
import Board from './components/Board';
import {
	lightSquare,
	createBoard,
	createFenArray,
	makeMove,
	highlightPossibleMoves
} from './functions/game';
import './App.css';
import Cell from './components/Cell';
import AudioPlay from './components/audio';

const App = props => {
	//The FEN representation of the board. Stored in state
	const startingFen =
		localStorage.fen ||
		'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
	const [fen, setFen] = useState(startingFen);
	const [possibleMoves, setPossibleMoves] = useState([]);

	const chess = new Chess(fen);
	const turn = useRef(chess.turn()); //Control the turn
	const currentPlaying = useRef();
	const fromPos = useRef();
	const toPos = useRef();
	// const beat = useRef();
	const board = createBoard(createFenArray(fen)); // [{name: 'a8', piece: 'r'},{},{}]
	console.log(chess.ascii());
	console.log(board);

	const onDragStartHandler = (piece, pos) => {
		//sets the currenty playing piece and position
		currentPlaying.current = piece;
		fromPos.current = pos;

		// setPossibleMoves(state => state.concat(highlightPossibleMoves(chess, pos))); //highlightPossibleMoves returns an array
		const valid = highlightPossibleMoves(chess, pos);
		setPossibleMoves(valid);
	};

	const onDropHandler = pos => {
		toPos.current = pos; //set the position we want to move to
		makeMove(chess, currentPlaying.current, fromPos.current, toPos.current);
		setFen(chess.fen());
		// music.current.play();
	};

	const onDragOverHandler = cell => {
		const draggedOverCells = [];
		draggedOverCells.push(cell);

		toPos.current = draggedOverCells.pop(); //The very last cell we dropped the on
		// console.log(toPos.current);
	};
	// ? Creating the chess cells
	let markup = board.map((cell, index) => (
		<Cell
			piece={cell.piece} //b
			pos={cell.name} //a1
			key={index}
			isPossibleMove={possibleMoves.includes(cell.name)}
			light={lightSquare(index + 1)} //true
			color={
				isNaN(+cell.piece)
					? cell.piece === cell.piece.toUpperCase()
						? 'w'
						: 'b'
					: 'e'
			}
			onDragStart={(piece, pos) => {
				//position drag starts
				onDragStartHandler(piece, pos);
			}}
			onDrop={pos => {
				//position player drops piece
				onDropHandler(pos);
			}}
			onDragOver={dropPosition => onDragOverHandler(dropPosition)}
		/>
	));

	if (chess.game_over()) return <h1>Game Over</h1>;

	return (
		<Board>
			{markup}
			<AudioPlay />
		</Board>
	);
};

export default App;
