const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let n = characters.length

let passLen = document.getElementById("len-inp")
let genBtn = document.getElementById("generate-btn")
let output1 = document.getElementById("output1")
let output2 = document.getElementById("output2")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")

genBtn.addEventListener("click", writeOutput)

function generate() {
    let len = passLen.value
    let pass = ""
    for(let i=0; i<len; i++) {
        randNum = Math.floor( Math.random() * n)
        if(numbers.checked === false && (randNum >= characters.indexOf("0") && randNum <= characters.indexOf("9"))) {
            i -= 1
            continue
        }
        if(symbols.checked === false && (randNum >= characters.indexOf("~"))) {
            i -=1
            continue
        }
        pass += characters[randNum]
    }
    return pass
}

function writeOutput() {
    let pass1 = generate()
    let pass2 = generate()

    output1.textContent = pass1
    output2.textContent = pass2

    output1.style.visibility = "visible"
    output2.style.visibility = "visible"
    document.getElementById("output").style.visibility = "visible"
}

output1.addEventListener("click", function() {copyText(output1)})
output2.addEventListener("click", function() {copyText(output2)})

function copyText(output) {
    var message = output.textContent
    navigator.clipboard.writeText(message)
}