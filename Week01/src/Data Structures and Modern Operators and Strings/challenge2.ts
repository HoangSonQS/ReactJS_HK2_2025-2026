import { game } from "./gameData";

for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
}

let sum = 0
const oddsValues = Object.values(game.odds)
for (const odd of oddsValues) {
    sum += odd
}

const avgOdd = sum / oddsValues.length
console.log('Average odd: ', avgOdd);

for (const [key, odd] of Object.entries(game.odds)) {
    const keyName = key === 'x' ? 'Draw' : `victory ${game[key as 'team1' | 'team2']}`
    console.log(`Odd of ${keyName}: ${odd}`)
}

console.log('----BONUS----');

const scorers: Record<string, number> = {};

for (const player of game.scored) {
    scorers[player] = (scorers[player] || 0) + 1
}

console.log('Scorers:', scorers);


