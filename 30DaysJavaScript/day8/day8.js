// Activity 1:Template literals

// Task 1: Use the template literals to create a string that variables for a persons 
//name and ageand log the string to the console
let name = "Farhan"
let age = 20
console.log(`The name of the person is ${name} and his age is ${age}`);

// Task 2: Create a multi-line string using template literals and log it to the console
console.log(`Hello hi there
    I am taking 30 Day js challenge
    Today is day 8`);

// Activity 2: Destructing

//Task 3: Use array destructing to extract the first and second elements from an array of numbers and log them to the console
const arr= [1,2,3,4,5]
const [first,second] = arr
console.log(`First element ${first} second element ${second}`);

// Task 4: Use object destructring to extract the title and author from a book object and log them to the console
const book = {
    title:"Node",
    author:"Ralph"
}
const {title,author}= book
console.log(`Title: ${title} Author: ${author}`);

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array 
// plus additionla elements and log the new array to the console

const newArr = [...arr,6,7,8,9]
console.log(newArr);

// Task 6: Use the rest operator in a function to accept an arbitary number of arguments,sum them, and return the result

function sum(...numbers) {
    let result = 0
    for (const number of numbers) {
        result += number
    }
    return result
}
console.log(sum(1,2,3,4,5));

// Activity 4: Default Parameters

// Task 7:Write a function that takes two parameters and returns their product
// with second parameter having a default value of 1.
// log the result of calling this function with and without the second parameter
function product(first,second=1) {
    return first*second
}
console.log(product(7,3));
console.log(product(7));

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties and log the object to the console
const carName = 'lamborgini';
const model = 101;

const car = {
  carName,
  model,
  
  info() {
    console.log(`Car Name is ${this.carName} and Model Number ${this.model}`);
  },

  ['model' + 'countryCode']() {
    return this.model + 14;
  }
};

console.log(car);
car.info();
console.log(`Car model number in this country is ${car.modelcountryCode()}`);

// Task 9: Create an object with computed property names based on variables and log the object to the console
const key1 = 'firstName'
const key2 = 'lastName'
const key3 = 'uid'

const id ={
    [key1]:"Farhan",
    [key2]:"Ahmed",
    [key3]:101
}
console.log(id);