// Using Functions

function createUser(name, score) {
    const newUser = Object.create(null);
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++;
    }
    return newUser;
}
const user1 = createUser("AMK", 7);
const user2 = createUser("Atahar", 5);
user2.increment();

// Using the prototype chain

function userCreator(name, score) {
    const newUser = Onject.create(userFunctions);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}
const userFunctions = {
    increment: function () { this.score++; },
    login: function () { console.log("Logged in"); }
};
const user3 = userCreator("Adnan", 6);
const user4 = userCreator("Krishna", 9);
user3.increment();

// Using new keyword

function userCreate(name, score) {
    this.name = name;
    this.score = score;
}
userCreate.prototype.increment = function () { this.score++; };
userCreate.prototype.login = function () { console.log("Logged in"); };
const user5 = new userCreate("Rahul", 9);
user5.increment();

// Using class

class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increment() { this.score++; }
    login() { console.log("Logged in"); }
}
const user6 = new UserCreator("Mayank", 5);
user6.increment();