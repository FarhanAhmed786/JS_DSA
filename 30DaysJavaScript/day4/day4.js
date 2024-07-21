// Acitivity 1: For Loops

// Task 1: Write a program to print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
      console.log("i :",i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5*i}`); 
}

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop
let sum = 0,i=1
while(i<=10){
    sum += i
    i++
}
console.log(`Sum of Numbers from 1 to 10 is ${sum}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop
let j = 10
while (j>=1) {
    console.log(`j is ${j}`);
    j--
}

// Activity 3:Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let z = 1
do{
    console.log(`z is ${z}`);
    z++
}while(z<=5);
// Task 6: Write a program to calculate the factorial of a number using a do...while loop
let fact = 1
let y = 1
do {
    fact *= y
    y++
} while (y<=5);
console.log(`Factorial of 5 is ${fact}`);

// Activity 4: Nested Loops

// Task 5: Write a program to print a pattern using nested for loops
let string = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*"); 
    } 
    console.log(); 
}
// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10 but skip the number 5 using the continue statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    console.log("i is ",i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break
    }
    console.log("i is ",i);
}