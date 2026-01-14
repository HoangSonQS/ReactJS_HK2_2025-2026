export const calcTip = (bill: number): number => {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
}

const bills: number[] = [125, 555, 44]

const tips: number[] = bills.map(calcTip)

const totals: number[] =  bills.map((bill, i) => bill + tips[i])

console.log("Bills :", bills);
console.log("Tips  :", tips);
console.log("Totals:", totals);