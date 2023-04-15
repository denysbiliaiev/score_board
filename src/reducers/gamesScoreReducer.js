import { START, FINISHED, UPDATE_SCORE, GAME_STATUS } from './actions';

function gamesScoreReducer(games, action) {
	switch (action.type) {
		case START: {
			return [...games, action.game];
		}
		case FINISHED: {
			return games.filter((game) => game.id != action.id);
		}
		case UPDATE_SCORE: {
			return games.map((game) => {
				const teams = game.teams.map((team) => {
					if (game.id === action.id) {
						const score = team.isHomeGame
							? action.homeTeamScore
							: action.awayTeamScore;

						return { ...team, score };
					}

					return team;
				});

				return game.id === action.id
					? { ...game, teams: teams, totalScore: action.totalScore }
					: game;
			});
		}
	}

	return games;
}

export { gamesScoreReducer };
