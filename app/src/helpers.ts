const winLines = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

export function calculateWinner(squares: Array<string>) {

	// Check win => one of win lines 
	for (let i = 0; i < winLines.length; i++) {
		const [a, b, c] = winLines[i];

		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}

	// Check draw => every cell is set and have no winner 
	if(squares.every(el => el)){
		return "x | o";
	}

	return null;
}