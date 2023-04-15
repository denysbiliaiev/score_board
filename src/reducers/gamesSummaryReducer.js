import {
	START,
	FINISHED,
	HOME_GAME,
	UPDATE_SUMMARY,
	GAME_STATUS
} from './actions';

function gamesSummaryReducer(games, action) {
	switch (action.type) {
		case START: {
			return games.map((game) =>
				game.id == action.game.id
					? { ...game, status: GAME_STATUS.IN_PROGRES }
					: game
			);
		}
		case FINISHED: {
			return games.map((game) =>
				game.id == action.id ? { ...game, status: GAME_STATUS.FINISHED } : game
			);
		}
		case HOME_GAME: {
			return games.map((game) => {
				const teams = game.teams.map((team) => {
					const isHomeGame = team.name === action.teamName;

					return { ...team, isHomeGame };
				});

				return game.id === action.id ? { ...game, teams: teams } : game;
			});
		}
		case UPDATE_SUMMARY: {
			return games.map((game) => {
				const teams = game.teams.map((team) => {
					if (game.id === action.id) {
						const score = team.isHomeGame
							? action.homeTeamScore
							: action.awayTeamScore;
						console.log(action);

						return { ...team, score };
					}

					return team;
				});

				return game.id === action.id ? { ...game, teams: teams } : game;
			});
		}
	}

	return games;
}

export { gamesSummaryReducer };
