// Example 1

function display(data) {
    console.log(data);
}
const futureData = fetch("https://twitter.com/amk/tweets");
futureData.then(display);
console.log("Me First");

// Example 2

function display1(data) {
    console.log(data);
}
function printHello() {
    console.log("Hello");
}
function blockFor300ms(/* Some lines of code */) { }
setTimeout(printHello, 0);
const futureData1 = fetch("https://twitter.com/amk/tweets/1");
futureData1.then(display1);
blockFor300ms();
console.log("Me First");