// Activity 1:Array Creation and Access

// Task 1: Create ab array of numbers from 1 to 5 and log the array to the console
const myArr = [1,2,3,4,5]
console.log(myArr);

// Task 2: Access the first and last elements of the array and log then to the console
const first = myArr[0]
const last = myArr[myArr.length-1]
console.log(`First Element of the array ${first} and last element ${last}`);

// Activity 2:Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
myArr.push(6)
console.log("Pushed value ",myArr[myArr.length-1]);

// Task 4: Use the pop method to remove the last element from the  array and log the updated array.
console.log("Poped value ",myArr.pop());

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
console.log("Shift value ",myArr.shift());

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
myArr.unshift(1)
console.log("UnShift value ",myArr[0]);

// Activity 3:Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const mappedValue = myArr.map((a)=>(a*2))
console.log(mappedValue);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const filterValue = myArr.filter((a)=>(a%2==0))
console.log(filterValue);

// Task 9: Use the reduce  method to calculate the sum of all numbers in the array and log the result.
const sum = myArr.reduce((acc,cur)=>(acc+cur),0)
console.log(sum);

// Activity 4: Array Iterations

// Task 10: Use a for loop to iterate over the array and log each element to the console
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);    
}

// Task 11: Use a forEach method to iterate over the array and log each element to the console
myArr.forEach(element => {
    console.log(element);
});

// Activity 5: Multi-Dimensional Arrays

// Task 12: Create a two-Dimensional array(matrix) and log the entire array to the console
const twoDimArr = [[1,2,3],[4,5,6],[7,8,9]]
console.table(twoDimArr);

// Task 13: Access and log a specific element from the two dimensional array.
console.log(twoDimArr[2][1]); 
