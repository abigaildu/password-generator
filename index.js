let passwordElOne = document.getElementById("password-el-one");
let passwordElTwo = document.getElementById("password-el-two");
let passwordElThree = document.getElementById("password-el-three");
let passwordElFour = document.getElementById("password-el-four");
let passwordCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`", "@"];
let passwordLength = document.getElementById("password-length");

function generatePassword() {
    let password = "";
    let length = passwordLength.value;
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        password += passwordCharacters[randomIndex];
    }
    return password;
}

function renderPassword() {
    passwordElOne.textContent = "";
    passwordElTwo.textContent = "";
    passwordElThree.textContent = "";
    passwordElFour.textContent = "";

    passwordElOne.textContent += generatePassword();
    passwordElTwo.textContent += generatePassword();
    passwordElThree.textContent += generatePassword();
    passwordElFour.textContent += generatePassword();
}

function copyToClipboard(elementId) {
    if(!elementId) return;
    
    let elementText = elementId.textContent;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);

    inputElement.select();

    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

document.querySelector("#password-el-one").onclick = function() {
    copyToClipboard(document.querySelector("#password-el-one"));
}
document.querySelector("#password-el-two").onclick = function() {
    copyToClipboard(document.querySelector("#password-el-two"));
}
document.querySelector("#password-el-three").onclick = function() {
    copyToClipboard(document.querySelector("#password-el-three"));
}
document.querySelector("#password-el-four").onclick = function() {
    copyToClipboard(document.querySelector("#password-el-four"));
}

// passElOne.addEventListener("click", copyToClipboard)
// passElTwo.addEventListener("click", copyToClipboard)
// passElThree.addEventListener("click", copyToClipboard)
// passElFour.addEventListener("click", copyToClipboard)

// function copyToClipboard(elementId) {
//     let copyText = document.getElementById(elementId).innerHTML;

//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copyText.value);

//     alert("Copied the text: " + copyText.value);
// }

// // Adding event listeners
// document.getElementById("password-el-one").addEventListener("click", copyToClipboard());
// document.getElementById("password-el-two").addEventListener("click", copyToClipboard());
// document.getElementById("password-el-three").addEventListener("click", copyToClipboard());
// document.getElementById("password-el-four").addEventListener("click", copyToClipboard());
