const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f",
"g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
"#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passBtn = document.getElementById("pass-btn")
let passBoxEl1 = document.getElementById("pass-appear-el-one")
let passBoxEl2 = document.getElementById("pass-appear-el-two")

let passLength = 15

function getRandomIndex() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function generatePass() {
    let randomPass = "" 
    for (i = 0; i < passLength; i++) {
        randomPass += getRandomIndex()
    }
    return randomPass
}

function passBoxs() {
    passBoxEl1.textContent = generatePass()
    passBoxEl2.textContent = generatePass()
}