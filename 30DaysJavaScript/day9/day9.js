//Activity 1: Selecting and Manipulating Elements

// Task 1: Select and HTML element by its ID and change its text content.
const text = document.getElementById("text")
text.textContent = "This is new Text Content"

// Task 2: Select and HTML element by its class and change its background color
const textContent = document.getElementsByClassName("text-content")
textContent[0].style.backgroundColor = "cyan"

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body
const newDiv = document.createElement("div")
const textContent2 = document.createTextNode("This is Second Content")
newDiv.appendChild(textContent2)
document.body.appendChild(newDiv)

// Task 4: Create a new li element and add it to an exsisting ul list
const ul = document.querySelector("ul")
const li = document.createElement("li")
li.textContent = "list item 4"
ul.appendChild(li)

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM
const remove = document.getElementsByClassName("remove")
document.body.removeChild(remove[0])

// Task 6: Remove the last child of a specific HTML element
const parent = document.getElementsByClassName("remove-last")[0]
const lastChild = parent.lastElementChild
parent.removeChild(lastChild)

// Activity 4: Modifying Attributes and CLasses

// Task 7: Select an HTML element and change one of its attributes (eg src of an img tag)
const changeElement = document.querySelector(".section2")
changeElement.setAttribute("class","listSection")

// Task 8: Add and remove a Css class to/from an HTML element
const li1 = document.getElementById("li1")
li1.style.color = "blue"

li1.style.removeProperty("color")

// Activity 5:Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph
const changeBtn = document.querySelector("#change")
const content = document.querySelector(".content")
changeBtn.addEventListener("click",()=>{
    content.textContent = "Content after clicking Text"
})

// Task 10: Add a mouseover event listener to an element that changes its border color
content.addEventListener("mouseover",()=>{
    content.style.borderColor = "green"
})