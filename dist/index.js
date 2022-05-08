"use strict";
// Basic Types
let id = 5;
let company = 'Media';
let isPublished = true;
let x = 'hello';
x = 65;
let ids = [1, 3, 4, 5, 6];
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'media', false];
// Tuple Array
let employees;
employees = [
    [1, 'media'],
    [2, 'code'],
    [3, 'hello']
];
// Unions
let pid;
pid = 22;
pid = 'code';
// Enum
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 1] = "Up";
    direction1[direction1["Down"] = 2] = "Down";
    direction1[direction1["Left"] = 3] = "Left";
    direction1[direction1["Right"] = 4] = "Right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "Down";
    direction2["Left"] = "Left";
    direction2["Right"] = "Right";
})(direction2 || (direction2 = {}));
console.log(direction2);
const user = {
    id: 1,
    name: 'code'
};
//Type Assertion
let cid = 1;
let customerId = cid;
customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(msg) {
    console.log(msg);
}
const user1 = {
    id: 1,
    name: 'code'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered now!`;
    }
}
const media = new Person(1, 'media');
const code = new Person(2, 'code');
// SubClasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employee = new Employee(1, 'media', 'engineer');
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(['code', 'media', 'hello']);
// stringArray.push(1) // throws error
stringArray.push('world'); // works fine
