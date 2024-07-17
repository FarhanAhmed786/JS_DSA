// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console
function evenOrOdd(num){
    if(num%2===0){
        console.log("Number is Even");
    }
    else{
        console.log("Number is Odd");
    }
}
evenOrOdd(4)

// Task 2: Write a function to calculate the square of a number and return the result
function squareOfNum(num){
    return Math.pow(num,2)
}
console.log(squareOfNum(4));

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console

const maxOfTwoNum = function(num1,num2) {
    if (num1>=num2) {
        console.log("Num1 is greater than Num2");
    }
    else{
        console.log("Num2 is greater than Num1");
    }
}
maxOfTwoNum(2,3)

// Task 4: Write a function expression to concatenate two strings and return the result

const concatTwoString = function(string1,string2){
    return string1+string2
}
console.log(concatTwoString("Hello","World"));

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (num1,num2)=>(num1+num2)
console.log(sum(3,4));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value
const checkChar = (string,char)=>{
    if(string.includes(char)){
        return true
    }
    else{
        return false
    }
}
console.log(checkChar("hello","e"));
console.log(checkChar("hello","z"));

// Activity 4:Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product.
// Provide a default value for the second parameter.
function multipy(num1,num2=1){
    return num1*num2
}
console.log(multipy(2,4));
console.log(multipy(7));

//Task 8: Write a function that takes a persons name and age and return a greeting message.
//Provide a default value for the age.

function greeting(name,age=18){
    return `Hello ${name}! You are ${age} years old.`
}
console.log(greeting("Farhan",20));
console.log(greeting("Farhan"));

// Activity 5:Higher-Order Functions

// Task 9: Write a higher-order function that taked a function and a number and calls a the function that many times
function repeater(func,times){
    return function(){
        for (let i = 0; i < times; i++) {
            func();          
        }
    };
}
function greet(){
    console.log("HELLOOO!");
}
(repeater(greet,3))();

// Task 10: Write a higher-order function that takes two functions and a value,
//applies the first function to the value,and then applies the second function to the result.

function TwoFuncGame(func1,func2,value){
    return func2(func1(value))
}

function age(value){
    return value;
}
function sayAge(value2){
    console.log(`Your age is ${value2}`);
}
TwoFuncGame(age,sayAge,4);