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
