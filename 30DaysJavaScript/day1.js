// DAY-1 

// Activity 1 :Variable Declaration

//task 1: Declare a variable using var, assign it a number and log the value to the console.
var myVar = 1;
console.log(myVar);
//task 2: Declare a variable using let, assign it a string and log the value to the console.
let myString = "Day1 JS Challenge";
console.log(myString);

// Activity 2 :Constant Declaration

//task 3: Declare a variable using const, assign it a boolean value and log the value to the console.
const myBoolean = true;
console.log(myBoolean);

// Activity 3: Data Types

//task 4: Create variables different types(number,string,boolean,object,array) and log each variable type using the typeof operator.
let age = 15
let name = "JHON DOE"
let value = false
let ob = {
    key:"value pair",
    mykey:"my value"
}
let myArr = [1,2,3,4,5,6,7]
console.log(typeof age);
console.log(typeof name);
console.log(typeof value);
console.log(typeof ob);
console.log(typeof myArr);

// Activity 4: Reassigning Variables

//task 5: Declare a variable using let, assign it a initial value reassign a new value and log both values to the console.
let username= "my user"
console.log(username);
username = "not my user"
console.log(username);

// Activity 5: Understanding const

//task 6: Try reassinging a variable declared with const and observe the error
const password = "123pass"
console.log(password);
password = "321pass"
console.log(password);
