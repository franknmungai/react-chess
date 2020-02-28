export const lightSquare = piece => {
	const light = [
		1,
		3,
		5,
		7,
		10,
		12,
		14,
		16,
		17,
		19,
		21,
		23,
		26,
		28,
		30,
		32,
		33,
		35,
		37,
		39,
		42,
		44,
		46,
		48,
		49,
		51,
		53,
		55,
		58,
		60,
		62,
		64
	];

	return light.includes(piece);
};

const range = (min, max) =>
	Array.from({ length: max - min + 1 }, (_, i) => min + i);

//*Create an array representation of the fen.
export const createFenArray = fen => {
	//Create a string representation of the board.
	const fenItems = fen.replace(' ', '/').split('/'); //rows
	const files = fenItems.slice(0, 8); //['rnbqkbnr', 'pppppppp', 8,8,8,8,'PPPPPPPP','RNBQKBNR']

	let stringBoard = files.join(''); //rnbqkbnrpppppppp8888PPPPPPPPRNBQKBNR

	let localBoard = Array.from(stringBoard);

	Array.from(stringBoard).forEach((char, index) => {
		if (!isNaN(+char)) {
			//if is a number, hence empty piece.
			localBoard.splice(index, 1, range(1, char).fill(1));
		}
	});

	return localBoard.flat(1);
};

const test = () => {
	let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	let files = [];

	for (let i = 1; i <= 8; i++) {
		let b = [...a].fill(i); //[1,1,1]
		let c = a.map((_a, index) => {
			return `${_a}${b[index]}`; //['a1', 'b1', 'c1']
		});
		files.push(c);
	}

	return files.reverse().flat(1);
};
export const createBoard = fenArray => {
	const cells = test();

	let board = cells.map((cell, index) => {
		return { name: cell, piece: fenArray[index] };
	});

	return board;
};
export const highlightPossibleMoves = turn => {};