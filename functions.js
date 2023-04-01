// Generalized Functions

function squareNum(num) {
    return num * num;
}

// Higher Order Functions

function copyArray(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}
function multiplyBy2(input) {
    return input * 2;
}
const result = copyArray([1, 2, 3], multiplyBy2);

// Arrow Functions

const multiplyBy2 = (input) => { return input * 2 };