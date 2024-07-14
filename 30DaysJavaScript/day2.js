// Activity 1: Arithmetic Operations

//task 1: Write a program to add two numbers and log the result to the console
let add1 = 100;
let add2 = 200;
let result = add1 + add2;
console.log(`Result of adding two numbers ${result}`);

//task 2: Write a program to subtract two numbers and log the result to the console
let sub1 = 100;
let sub2 = 200;
let result1 = sub1 - sub2;
console.log(`Result of subtracting two numbers ${result1}`);

//task 3: Write a program to multipy two numbers and log the result to the console
let mul1 = 100;
let mul2 = 200;
let result2 = sub1 * sub2;
console.log(`Result of multiplying two numbers ${result2}`);

//task 4: Write a program to divide two numbers and log the result to the console
let div1 = 100;
let div2 = 200;
let result3 = sub1 / sub2;
console.log(`Result of multiplying two numbers ${result3}`);

//task 5: Write a program to find the remainder when one number is divided by another and log the result to the console
let rem1 = 100;
let rem2 = 200;
let result4 = sub1 % sub2;
console.log(`Result of multiplying two numbers ${result4}`);

// Activity 2: Assignment Operators

// Task 6: use += operator to add a number to a variable and log the result to the console
let aNum = 7
aNum += 100
console.log(`Result of using += operator ${aNum}`);

// Task 7: use -= operator to subtract a number from a variable and log the result to the console
let sNum = 100
sNum -= 7
console.log(`Result of using -= operator ${sNum}`);

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console
let cmp1 = 100
let cmp2 = 200
console.log('Comparison Operators using ">": ',cmp1 > cmp2)
console.log('Comparison Operators using "<": ',cmp1 < cmp2)

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console
let cmp3 = 100
let cmp4 = 200
console.log('Comparison Operators using ">=": ',cmp3 >= cmp4)
console.log('Comparison Operators using "<=": ',cmp3 <= cmp4)

// Task 10: Write a program to compare two numbers using == and === and log the result to the console
let cmp5 = 3
let cmp6 = "3"
console.log('Comparison Operators using "==": ',cmp5 == cmp6)
console.log('Comparison Operators using "===": ',cmp5 === cmp6)

// Acitivity 4: Logical Operators

// Task 11: Write a program to uses the && operator to combine two condition and log the result to the console
let log1 = 20
let log2 = 30
let log3 = 40
let log4 = 50
console.log("Using && operator",log1<log2  && log3<log4);

// Task 12: Write a program to uses the || operator to combine two condition and log the result to the console
let log5 = 20
let log6 = 30
let log7 = 40
let log8 = 50
console.log("Using ||operator",log5<log6  || log7>log8);

// Task 13: Write a program to uses the ! operator to negate a condition and log the result to the console
let value1 = true
console.log("Using ! operator",!value1);

// Acitivity 5: Ternary Operators

// Task 11: Write a program to uses the ternary operator to check if an number is positive or negative and log the result to the console

let check1 = 100
let check2 = -200
console.log(`Number is ${check1 >= 0? "positive":"negative"}`);
console.log(`Number is ${check2 >= 0? "positive":"negative"}`);