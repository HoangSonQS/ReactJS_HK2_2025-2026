import { game } from "./gameData"

const [players1, players2] = game.players

const [gk, ...fieldPlayers] = players1

const allPlayers = [...players1, ...players2]

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

const {team1, x: draw, team2} = game.odds

function printGoals(...players: string[]): void {
    console.log('Scored players:');
    players.forEach(player => console.log(player))
    console.log(`Total goals: ${players.length}`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log(`${game.team1} is more likely to win`);
team2 < team1 && console.log(`${game.team2} is more likely to win`);