import { rl, nhapDuLieu } from "./part1_challenge3";

const calcAverage = (a: number, b: number, c: number): number => (a + b + c) / 3

const checkWinner = (dAvg: number, kAvg: number): void => {
    if (dAvg > 2 * kAvg) 
        console.log(`Dolphins win (${dAvg} vs. ${kAvg})`);
    else if (kAvg > 2 * dAvg) 
        console.log(`Koalas win (${kAvg} vs. ${dAvg})`);
    else
        console.log(`No team won (${kAvg} - ${dAvg})`);
}

const runPart2 = async () => {
    try {
        const d1:number = parseInt(await nhapDuLieu("Nhập điểm thứ nhất của đội Dolphin: "))
        const d2:number = parseInt(await nhapDuLieu("Nhập điểm thứ hai của đội Dolphin: "))
        const d3:number = parseInt(await nhapDuLieu("Nhập điểm thứ ba của đội Dolphin: "))
        
        const k1:number = parseInt(await nhapDuLieu("Nhập điểm thứ nhất của đội Koala: "))
        const k2:number = parseInt(await nhapDuLieu("Nhập điểm thứ hai của đội Koala: "))
        const k3:number = parseInt(await nhapDuLieu("Nhập điểm thứ ba của đội Koala: "))

        const dAvg = calcAverage(d1, d2, d3)
        const kAvg = calcAverage(k1, k2, k3)

        checkWinner(dAvg, kAvg)
    } catch (error) {
        console.log('Lỗi nhập dữ liệu');
    } finally {
        rl.close();
    }
}

runPart2()
