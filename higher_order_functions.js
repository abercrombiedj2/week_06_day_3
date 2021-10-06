const myNumbers = [1, 2, 3, 4, 5]

// for (const number of myNumbers){
//     console.log(`This number is ${number}`);
// }

// myNumbers.forEach((number) => {
//     console.log(`This number is ${number}`);
// })

// myNumbers.forEach((number, index) => {
//     console.log(`This is number ${number} at index position ${index}`);
// })

const multiplyByTwo = function(numbers){
    const result = numbers.map((number) => {
        return number * 2;
    });
    return result;
}

console.log(multiplyByTwo(myNumbers));

const getEvens = function(numbers){
    const result = numbers.filter((number) => {
        return number % 2 === 0;
    });
    return result;
}

console.log(getEvens(myNumbers));

const sumElements = function(numbers){
    total = numbers.reduce((runningTotal, number) => {
        return runningTotal + number;
    }, 100);
    return total;
}

console.log(sumElements(myNumbers));

