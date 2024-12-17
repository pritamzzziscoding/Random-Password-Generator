const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0987654321";
const symbols = "!@#$%^&*()+=/;[]}{:?><";

const characters = lowercase + uppercase + numbers + symbols;

console.log(characters);


function createPassword(){
    let length = 12;
    var pass = ""
    pass += uppercase[Math.floor(Math.random() * uppercase.length)];
    pass += lowercase[Math.floor(Math.random() * lowercase.length)];
    pass += symbols[Math.floor(Math.random() * symbols.length)];
    pass += numbers[Math.floor(Math.random() * numbers.length)];
    while(length--){
        pass += characters[Math.floor(Math.random() * characters.length)];
    }
    return pass;
}

function copyTexts() {
    inputBox.select();
    // Copy the value to the clipboard using the Clipboard API
    navigator.clipboard.writeText(inputBox.value);
}

const generate = document.querySelector("button");
const inputBox = document.querySelector("input");
const copyText = document.querySelector(".copy");

generate.addEventListener("click",function(){
    const password = createPassword();
    inputBox.value = password;
});

copyText.addEventListener("click", function(){
    copyTexts();
});


