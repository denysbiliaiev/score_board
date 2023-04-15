import { useReducer } from 'react';
import { GAME_STATUS } from './actions';
import { gamesScoreReducer } from './gamesScoreReducer';
import { gamesSummaryReducer } from './gamesSummaryReducer';

function useGamesReducer() {
	return useReducer(
		combineReducers({
			gamesScore: gamesScoreReducer,
			gamesSummary: gamesSummaryReducer
		}),
		initialState
	);
}

function combineReducers(reducers) {
	return (state = {}, action) => {
		const newState = {};
		for (let key in reducers) {
			newState[key] = reducers[key](state[key], action);
		}
		return newState;
	};
}

const initialGamesState = [
	{
		id: 1,
		status: GAME_STATUS.NOT_STARTED,
		totalScore: 0,
		priority: 0,
		teams: [
			{
				name: 'Mexico',
				isHomeGame: true,
				score: null
			},
			{
				name: 'Canada',
				isHomeGame: false,
				score: null
			}
		]
	},
	{
		id: 2,
		status: GAME_STATUS.NOT_STARTED,
		totalScore: 0,
		priority: 0,
		teams: [
			{
				name: 'Spain',
				isHomeGame: true,
				score: null
			},
			{
				name: 'Brazil',
				isHomeGame: false,
				score: null
			}
		]
	},
	{
		id: 3,
		status: GAME_STATUS.NOT_STARTED,
		totalScore: 0,
		priority: 0,
		teams: [
			{
				name: 'Germany',
				isHomeGame: true,
				score: null
			},
			{
				name: 'France',
				isHomeGame: false,
				score: null
			}
		]
	},
	{
		id: 4,
		status: GAME_STATUS.NOT_STARTED,
		totalScore: 0,
		priority: 0,
		teams: [
			{
				name: 'Uruguay',
				isHomeGame: false,
				score: null
			},
			{
				name: 'Italy',
				isHomeGame: true,
				score: null
			}
		]
	},
	{
		id: 5,
		status: GAME_STATUS.NOT_STARTED,
		totalScore: 0,
		priority: 0,
		teams: [
			{
				name: 'Argentina',
				isHomeGame: false,
				score: null
			},
			{
				name: 'Australia',
				isHomeGame: true,
				score: null
			}
		]
	}
];

const initialState = {
	gamesScore: [],
	gamesSummary: initialGamesState
};

export { useGamesReducer };
