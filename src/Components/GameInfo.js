import React, { Component } from 'react';
import { useContext, useState, useEffect } from 'react';
import ActionPanel from './ActionPanel';
import Input from './Input';
import Checkbox from './Checkbox';
import Button from './Button';
import {
	START,
	FINISHED,
	HOME_GAME,
	UPDATE_SCORE,
	UPDATE_SUMMARY,
	GAME_STATUS
} from '../reducers/actions';

function GameInfo({ game, dispacth, isScoreboard }) {
	const hasGameNotStarted = game.status === GAME_STATUS.NOT_STARTED;
	const team1 = game.teams[0];
	const team2 = game.teams[1];
	const [homeTeamScore, setHomeTeamScore] = useState(0);
	const [awayTeamScore, setAwayTeamScore] = useState(0);

	const handleStartGame = () => {
		dispacth({
			game: { ...game, priority: Date.now() },
			type: START
		});

		dispacth({
			id: game.id,
			homeTeamScore: 0,
			awayTeamScore: 0,
			totalScore: 0,
			type: UPDATE_SCORE
		});
	};

	const handleFinishGame = () => {
		dispacth({
			id: game.id,
			type: FINISHED
		});
		dispacth({
			id: game.id,
			homeTeamScore,
			awayTeamScore,
			type: UPDATE_SUMMARY
		});
	};

	const handleSetHomeGame = (e) => {
		dispacth({
			id: game.id,
			type: HOME_GAME,
			teamName: e.target.value
		});
	};

	const handleUpdateScore = () => {
		dispacth({
			id: game.id,
			homeTeamScore,
			awayTeamScore,
			totalScore: +homeTeamScore + +awayTeamScore,
			type: UPDATE_SCORE
		});
	};

	return (
		<div style={{ marginTop: '5px' }}>
			<div style={{ display: 'flex' }}>
				<div style={{ width: '100px' }}>{team1.name}</div>
				<div style={{ width: '100px' }}>
					<Checkbox
						handler={handleSetHomeGame}
						checked={team1.isHomeGame}
						id={game.id}
						value={team1.name}
						disabled={isScoreboard || !hasGameNotStarted}
					>
						{team1.isHomeGame ? 'home' : 'away'}
					</Checkbox>
				</div>
				<div style={{ width: '50px' }}>{team1.score}</div>
				<div style={{ width: '50px' }}>{team2.score}</div>
				<div style={{ width: '100px' }}>
					<Checkbox
						handler={handleSetHomeGame}
						checked={team2.isHomeGame}
						id={game.id}
						value={team2.name}
						disabled={isScoreboard || !hasGameNotStarted}
					>
						{team2.isHomeGame ? 'home' : 'away'}
					</Checkbox>
				</div>
				<div style={{ width: '100px' }}>{team2.name}</div>
				<ActionPanel>
					{isScoreboard ? (
						<>
							<Input
								handler={setHomeTeamScore}
								id={game.id}
								name="homeTeamScore"
							>
								Home
							</Input>
							<Input
								handler={setAwayTeamScore}
								id={game.id}
								name="awayTeamScore"
							>
								Away
							</Input>
							<Button handler={handleUpdateScore}>Update Score</Button>
							<Button handler={handleFinishGame}>Finish Game</Button>
						</>
					) : (
						<>
							{hasGameNotStarted && (
								<Button handler={handleStartGame}>Start Game</Button>
							)}
						</>
					)}
				</ActionPanel>
				<div>{!isScoreboard && game.status}</div>
			</div>
		</div>
	);
}

export default GameInfo;
