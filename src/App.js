import React, { Component, useReducer } from 'react';
import Board from './Components/Board';
import { useGamesReducer } from './reducers/gamesReducer';

export const DASHBOARD_TITLE = 'Dashboard';
export const SCOREBOARD_TITLE = 'Scoreboard';

function App() {
	const [state, dispatch] = useGamesReducer();

	return (
		<div>
			<Board
				title={SCOREBOARD_TITLE}
				games={state.gamesScore}
				dispacth={dispatch}
			/>
			<Board
				title={DASHBOARD_TITLE}
				games={state.gamesSummary}
				dispacth={dispatch}
			/>
		</div>
	);
}

export default App;
