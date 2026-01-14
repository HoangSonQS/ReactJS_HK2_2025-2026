const mMass : number = 95
const mHeight : number = 1.88

const jMass : number = 85
const jHeight : number = 1.76

const mBmi = mMass / mHeight ** 2
const jBmi = jMass / jHeight ** 2

const markHigherBMI = mBmi > jBmi

console.log("Kết quả challange 1")
console.log(`BMI MARK: ${mBmi}`);
console.log(`BMI JONH: ${jBmi}`);



