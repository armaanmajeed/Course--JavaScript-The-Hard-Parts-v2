// Example 1

function printHello() {
    console.log("Hello");
}
setTimeout(printHello, 1000);
console.log("Me First");

/*  Output
    Me First
    Hello
*/

// Example 2

function printHello1() {
    console.log("Hello");
}
setTimeout(printHello1, 0);
console.log("Me First");

/*  Output
    Me First
    Hello
*/