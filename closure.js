// Returning Functions

function outer() {
    function inner(num) {
        return num * 2;
    }
    return inner;
}
const generateFunction = outer();
const result = generateFunction(5);

// Nested Function Scope

function outer1() {
    let counter = 0;
    function incCounter() {
        counter++;
    }
    incCounter();
}
outer1();

// Retaining Function Memory

function outer2() {
    let counter = 0;
    function incrementCounter() {
        counter++;
    }
    return incrementCounter;
}
const newFunction = outer2();
newFunction();
newFunction();