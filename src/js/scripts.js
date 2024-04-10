// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("hello");

const myName = "jordan";

console.log(myName);

let myAge = 20;

myAge += 1;

console.log(myAge);


/* multi
line 
comment
*/

// Practical JavaScript

// Find Element to Hide
const toggledParagraph = document.querySelector('.show'); // query selector finds the first element on the page that matches selector and then stops
console.log(toggledParagraph);

// write a function that toggles the show/hide
function toggleParagraph() {
    toggledParagraph.classList.toggle("hide");
    toggledParagraph.classList.toggle("show");
    console.log("My toggle function");
    console.log(toggledParagraph);
}

// find button

const toggleButton = document.querySelector("#button");

toggleButton.addEventListener("click", toggleParagraph);
