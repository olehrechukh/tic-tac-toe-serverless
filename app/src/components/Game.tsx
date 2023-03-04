import React, { useState, Fragment } from 'react';
import styled from "styled-components";

import { Board } from './Board';
import { calculateWinner } from '../helpers';

const GameState = styled.div`
	width: 200px;
	margin: 20px auto;
`;

export const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [isXNext, setXisNext] = useState(true);
	const winner = calculateWinner(history[stepNumber]);

	const handleClick = (i: number) => {
		const timeInHistory = history.slice(0, stepNumber + 1);

		const current = timeInHistory[stepNumber];

		const squares = [...current];

		// if user click an occupied square or if game is won, return
		if (winner || squares[i]) { return };

		// Put an X or an O in the clicked square
		squares[i] = isXNext ? 'X' : 'O';
		setHistory([...timeInHistory, squares]);
		setStepNumber(timeInHistory.length);

		setXisNext(!isXNext);
	}

	const jumpTo = (step: number) => {
		setStepNumber(step);
		setXisNext(step % 2 === 0);
	}

	return (
		<Fragment>
			<Board squares={history[stepNumber]} onClick={handleClick} />
			<GameState>
				<p>{winner ? `Winner: ${winner}` : `Next Player ${isXNext ? 'X' : 'O'}`}</p>

				<button onClick={() => jumpTo(0)}> Start new game</button>
			</GameState>
		</Fragment>
	);
};