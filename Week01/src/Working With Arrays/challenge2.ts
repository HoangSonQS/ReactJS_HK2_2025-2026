const calcAverageHumanAge = (ages: number[]): void => {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age *4))
    const adults = humanAges.filter(age => age >= 18)

    if (adults.length > 0) {
        const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0)
        console.log(`Human Ages: [${humanAges}]`);
        console.log(`Adults    : [${adults}]`);
        console.log(`Average   : ${average.toFixed(2)}`);
    } else {
        console.log("Không có chú chó nào trưởng thành!");
    }
}

console.log("--- DATA 1 ---");
const Data1: number[] = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(Data1);

console.log("\n--- DATA 2 ---");
const Data2: number[] = [16, 6, 10, 5, 6, 1, 4];
calcAverageHumanAge(Data2);