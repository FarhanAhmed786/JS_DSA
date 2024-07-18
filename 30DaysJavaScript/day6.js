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
