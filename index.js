const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// DOM variables
let firstPassword = document.querySelector(".passwordOne")
let secondPassword = document.querySelector(".passwordTwo")

let passwordButton = document.querySelector(".generate-btn")
let clearButton = document.querySelector(".clear-btn")

// Clicked variable
onceClicked = false;


// Password function
function createPassword() {
    for (let i = 0; i < 16; i++){
        let firstRandomIndex = Math.floor (Math.random() * characters.length)
        // console.log(characters[randomIndex]);
        let randomOne = characters[firstRandomIndex]
        firstPassword.textContent += randomOne 
    } for (let x = 0; x < 16; x++){
        let secondRandomIndex = Math.floor(Math.random() * characters.length)
        let randomTwo = characters[secondRandomIndex]
        secondPassword.textContent += randomTwo
    }
    passwordButton.removeEventListener('click',createPassword)
}

// Generate passwords button
passwordButton.addEventListener('click', createPassword)

// Clear button function
clearButton.addEventListener('click', function(){
    firstPassword.textContent = ""
    secondPassword.textContent = ""
    passwordButton.addEventListener('click', createPassword)
})

// Function to clear first and second password boxes
// function wipePasswords(){
//     firstPassword.textContent = ""
//     secondPassword.textContent = ""
// }

// Copy text function
// function copyText(){
//     firstPassword.select();
//     document.execCommand("copy")
// }

// firstPassword.addEventListener('click', copyText)

// secondPassword.addEventListener("click", copyText)