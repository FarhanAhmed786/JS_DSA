// Activity 1:Basic Event Handling

// Task 1:Add a click event listener to a button that changes the text context of a parapgraph.
const btn = document.querySelector("button")
const para = document.querySelector(".para")

btn.addEventListener("click",()=>{
    para.textContent = "This text is changed after the button clicked"
})

// Task 2:Add a double click event listener to an image that toggles its visibility
const img = document.getElementById("barfi")
img.addEventListener("dblclick",()=>{
    img.style.visibility = "hidden"
})

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
const key = document.querySelector("#keyboard");
key.addEventListener("keydown",(e)=>{
    // e.preventDefault()
    console.log(e.key);
})

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const paragraph = document.querySelector("#paragraph");
const display = document.querySelector("#display")
paragraph.addEventListener("keydown",(e)=>{
    display.textContent = e.target.value
})

// Activity 4:Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console
const form = document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const formData ={
        fname:form.fname.value,
        lname:form.lname.value,
        favLang:form.fav_language.value
    }
    console.log(formData);
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph
const lang = document.getElementById("lang")
const langDisplay = document.getElementById("langDisplay")
lang.addEventListener("change",(e)=>{
    langDisplay.textContent = e.target.value
})

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list iterm using 
// event delegation
const types = document.querySelector("#types")
types.addEventListener("click",(e)=>{
    if(e.target &&e.target.nodeName == "LI")
        console.log(e.target.textContent);
})

// Task 10: Add an event listener to a parent element that list end for events from dynamically added
// child elements
const parent = document.querySelector("#parent")
const childItem = document.querySelector("#addChild")
const childList = document.querySelector("#childList")

parent.addEventListener("click",(e)=>{
    if(e.target && e.target.nodeName == "LI")
        console.log(e.target.textContent);
})

addChild.addEventListener("click",(e)=>{
    const li = document.createElement("li")
    li.textContent = `item ${childList.children.length + 1}`
    childList.append(li)
})