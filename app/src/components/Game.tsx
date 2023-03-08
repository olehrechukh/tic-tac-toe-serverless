import React, { useState } from 'react';
import styled from "styled-components";
import { Board } from './Board';
import { calculateWinner } from '../helpers';
import { Square } from './Square'
import './Game.css';
import { WinnerPopup } from './WinnerPopup';
import { TestApi } from './TestApi';


const RestartState = styled.button`
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
		<div className="tic-tac-toe">
			<h1> TIC-TAC-TOE </h1>

			<RestartState onClick={() => jumpTo(0)}> Restart</RestartState>

			<Board squares={history[stepNumber]} onClick={handleClick} />


			<div className={`turn ${isXNext ? "left" : "right"}`}>
				<Square clsName="x" onClick={() => { }} />
				<Square clsName="o" onClick={() => { }} />
			</div>

			{winner && <WinnerPopup winner={winner} reset={() => jumpTo(0)}></WinnerPopup>}

			<br></br>

			<TestApi />
		</div>
	);
};