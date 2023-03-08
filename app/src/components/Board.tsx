import React from "react";
import styled from "styled-components";
import { Square } from "./Square";

const BoardContainer = styled.div`
	margin: 0 auto;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;


interface BoardProps {
	squares: Array<string>,
	onClick: Function;
}

export const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
	return (
		<BoardContainer className="game">
			{squares.map((square, i) => (
				<Square key={i} clsName={square} onClick={() => onClick(i)} />
			))}
		</BoardContainer>
	);
};