
const sum  = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

// This is test code, please ignore for production

// const firstNum = 2;
// const secondNum = 3;
// const expected = 5;
// const actual = sum(firstNum, secondNum);

// if(actual !== expected) {
//     console.log('Your sum function is busted some how')
// }

// Here us the sum function for your app
// console.log(result)

console.log(sum(4,7))

exports.sum = sum;