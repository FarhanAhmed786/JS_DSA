// Acitivity 1: if-Else Statements

// Task 1: Write a program to check if a number is positive negative or zero and log the result to the console

let aNum = 30
if(aNum> 0){
    console.log("It is a positive Number");
}else if(aNum<0){
    console.log("It is a negative Number");
}else{
    console.log("It is Zero");
}

// Task 2: Write a program to check if a person is eligible to vote (age>=18) and log the result to the console
let age = 19
if (age>= 18) {
    console.log("You are eligible to vote");    
} else {
    console.log("You are not eligible to vote");
}

// Acitivity 2:Nested if-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements
let num1 = 30
let num2 = 40
let num3 = 50
if(num1>= num2 || num2>=num3){
    if(num1>=num3 && num1 >= num2){
        console.log("Num1 is largest ");
    }
    if(num2>=num3){
        console.log("Num2 is largest ");
    } 
}else{
    console.log("Num3 is largest");
}

// Acitivity 3:Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number(1-7) and  log the day name to the console

let weekNo = 3
switch (weekNo) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thrusday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Days of week exist between 1-7 ");
        break;
}

// Task 5: Write a program that uses a switch case to assign a grade (A,B,C,D,F) based on a score and  log the grade to the console

let grade = 'B'
switch (grade) {
    case 'A':
        console.log("Your grade is A (Excellent)");
        break;
    case 'B':
        console.log("Your grade is B (Good)");
        break;
    case 'C':
        console.log("Your grade is C (Satisfactory)");
        break;
    case 'D':
        console.log("Your grade is D (Pass)");
        break;
    case 'F':
        console.log("Your grade is F (Fail)");
        break;
    default:
        console.log("No grade awarded");
        break;
}

// Acitivity 4:Conditional (ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console

let myNum = 5
myNum % 2 == 0 ? console.log("Even Number"): console.log("Odd Number");;

// Acitivity 5:Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions
// (divisible by 4, but not 100 unless also divisible by 400 )and log the result to the console.

let year = 2023
if(year % 4 === 0){
    if(year % 100 !== 0 || year % 400 === 0)
        console.log(`${year} is a leap year`);
    else{
        console.log(`${year} is not a leap year`);
    }
}else{
    console.log(`${year} is not a leap year`);
}