import { gameEvents } from "./gameData";

const events = [...new Set(gameEvents.values())];
console.log('Events:', events);

gameEvents.delete(64);

const totalEvents = gameEvents.size;
const average = 90 / totalEvents;
console.log(`An event happened, on average, every ${average.toFixed(0)} minutes`);

for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${minute}: ${event}`);
}
