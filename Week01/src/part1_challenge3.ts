import { resolve } from "dns";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nhapDuLieu = (cauHoi: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(cauHoi, (answer) => {
            resolve(answer)
        })
    })
}

const main = async () => {
    try {
        const d1:number = parseInt(await nhapDuLieu("Nhập điểm thứ nhất của đội Dolphin: "))
        const d2:number = parseInt(await nhapDuLieu("Nhập điểm thứ hai của đội Dolphin: "))
        const d3:number = parseInt(await nhapDuLieu("Nhập điểm thứ ba của đội Dolphin: "))
        
        const k1:number = parseInt(await nhapDuLieu("Nhập điểm thứ nhất của đội Koala: "))
        const k2:number = parseInt(await nhapDuLieu("Nhập điểm thứ hai của đội Koala: "))
        const k3:number = parseInt(await nhapDuLieu("Nhập điểm thứ ba của đội Koala: "))

        const dAvg = (d1 + d2 + d3) / 3
        const kAvg = (k1 + k2 + k3) / 3
        const minScore: number = 100

        console.log(`The average score of Dolphins team is: ${dAvg}`);
        console.log(`The average score of Dolphins team is: ${kAvg}`);

        console.log('-------------');
        

        if (dAvg > kAvg) console.log('Dolphins team is win the trophy');
        else if (dAvg < kAvg) console.log('Koalas team is win the trophy');
        else if (dAvg == kAvg) console.log('Draw is the result of this compatision');
        else console.log('To day we dont have winner');
    } catch (error) {
    console.error("Lỗi nhập liệu:", error);
  } finally {
    rl.close();
  }
}

main()