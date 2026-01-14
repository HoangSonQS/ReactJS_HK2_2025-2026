const data1: number[] = [17, 21, 23] 
const data2: number[] = [12, 5, -5, 0, 4]


function printForecast(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}ºC in days ${i + 1}`);
    }
}

printForecast(data1)
printForecast(data2)