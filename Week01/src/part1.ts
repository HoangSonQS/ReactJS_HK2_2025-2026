const mMass : number = 95
const mHeight : number = 1.88

const jMass : number = 85
const jHeight : number = 1.76

const mBmi = mMass / mHeight ** 2
const jBmi = jMass / jHeight ** 2

const markHigherBMI = mBmi > jBmi

if (markHigherBMI) console.log(`Mark's BMI (${mBmi}) is higher than John's (${jBmi})!`);
else console.log(`Mark's BMI (${mBmi}) is shorter than John's (${jBmi})!`);




