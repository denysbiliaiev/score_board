import React, { Component } from 'react';
import GameInfo from './GameInfo';
import { SCOREBOARD_TITLE } from '../App';

function Board({ title, games, dispacth }) {
	const isScoreboard = title === SCOREBOARD_TITLE;

	const sortGames = (games) => {
		return games.sort(
			(game1, game2) =>
				game2.totalScore - game1.totalScore || game2.priority - game1.priority
		);
	};

	const gamesList = games.map((game) => {
		if (isScoreboard) {
			games = sortGames(games);
		}

		return (
			<GameInfo
				key={game.id}
				game={game}
				dispacth={dispacth}
				isScoreboard={isScoreboard}
			></GameInfo>
		);
	});

	return (
		<div style={{ marginTop: '20px' }}>
			<div style={{ color: 'green' }}>{title}</div>
			<hr />
			<div>{games.length == 0 ? 'Empty list' : gamesList}</div>
		</div>
	);
}

export default Board;
