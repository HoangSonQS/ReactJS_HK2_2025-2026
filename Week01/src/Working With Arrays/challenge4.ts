interface Dog {
    weight: number
    curFood: number
    owners: string[]
    recFood?: number
}

const dogs : Dog[] = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
]

dogs.forEach(dog => {
    dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)
})
console.log("1. Dogs with RecFood:", dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))

if (dogSarah && dogSarah.recFood) {
    console.log(`2. Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);
}

const ownersEatTooMuch = dogs.filter(dog => dog.recFood && dog.curFood > dog.recFood).flatMap(dog => dog.owners)
const ownersEatTooLittle = dogs.filter(dog => dog.recFood && dog.curFood < dog.recFood).flatMap(dog => dog.owners)

console.log("3. Owners That Dog Eat Too Much:", ownersEatTooMuch);
console.log("Owners That Dog Eat Too Little:", ownersEatTooLittle);

console.log(`4. ${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log("5. Any dog eating EXACT amount?", dogs.some(dog => dog.curFood === dog.recFood));


const checkEatingOkay = (dog: Dog): boolean => {
    if (!dog.recFood) return false;
    return dog.curFood > (dog.recFood * 0.9) && dog.curFood < (dog.recFood * 1.1);
}

console.log("6. Any dog eating OKAY amount?", dogs.some(checkEatingOkay));


const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log("7. Dogs eating OKAY:", dogsEatingOkay);

const dogsSorted = dogs.slice().sort((a, b) => {
    if (a.recFood && b.recFood) {
        return a.recFood - b.recFood;
    }
    return 0;
});

console.log("8. Sorted Dogs:", dogsSorted);