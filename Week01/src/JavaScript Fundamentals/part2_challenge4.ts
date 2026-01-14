import { calcTip } from "./part2_challenge2";

const bills: number[] = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips: number[] = []
const totals: number[] = []

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(bills[i] + tip)
}

console.log(`Bills: ${bills}`)
console.log(`Tips: ${tips}`);
console.log((`Totals: ${totals}`));

console.log('-----BONUS-----');

const calcAverage = (arr: number[]): number => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

const avgTotal = calcAverage(totals)
console.log(`Averange bill is: ${avgTotal.toFixed(2)}`);



