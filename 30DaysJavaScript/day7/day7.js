// Activity 1-: Object Creation and Access

// Task 1: Create an object representing a book with properties like title author and year and log the object to the console
const book ={
    title:"JavaScript made easy",
    author:"Farhan",
    year:2024
}
console.log(book);

//Task 2: Access and log the title and author properties of the book object
console.log(`The title of the book is ${book.title} and author is ${book.author}`);

// Activity 2: Object Methods

// Task 3: Add a member to the book object that returns a string with the book's title and author and log the result of calling this method
book.info = function(){
    return `The title of the book is ${book.title} and author is ${book.author}`
}
console.log(book.info());

// Task 4: Add a method to the book object that takes a parameter(year) and updates the books year property then log the updated object.
book.yearUpdate = function(year){
    this.year = year
}
book.yearUpdate(2019)
console.log(book.year);

// Activity 3: Nested Objects

//Task 5:Create a nested object represting a library with properties like name and books (an array of book objects)
// and log the library object to the console
const library={
    name:"Art library",
    books:[
        {
            title: "Life",
            author:"Michael",
            year:2014
        },
        {
            title: "Business",
            author:"Sam",
            year:2018
        },
        {
            title: "Mind Games",
            author:"Sanjay",
            year:2014
        }
    ]
}
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library
console.log(`Name of the library ${library.name} and the titles available ${library.books.map(book => book.title)}`);

// Activity 4: The this Keyword

// Task 7: Add a member to the book object that uses the this keyword to return a string with the books title and year
// and log th result of calling this method.

function info2(){
    return `Title: ${this.title} Year: ${this.year}`
}
book.info2 = info2
console.log(book.info2());

// Activity 5:Object Iteration
// Task 8: Use a for in loop to ierate over the properties of the book object and log each property and its value.

for (const prop in book) {
    console.log(`${prop}: ${book[prop]}`);
    
}

// Task 8: Use a Object.keys and Objects.values methods to log all the keys and values of the book object.

console.log(`Keys are ${Object.keys(book)}`);
console.log(`Values are ${Object.values(book)}`);