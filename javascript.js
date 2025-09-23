const cells = document.querySelectorAll(".cell");
const screen = document.getElementById("screen");
const clear = document.getElementById("CE");


function isNumber(text) {
    return /^[0-9]$/.test(text.trim());
}

// operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let displayed = screen.textContent;

const operation = {
    firstPart: "",
    operator: "null",
    secondPart: "",
}

function displaysZero() {
    return displayed === "0";
}

//logic for pressing a number button
function numberPressed(e) {
    if (isNumber(e.target.innerText)){
        if(displaysZero()) {
            console.log("Pressed: ", e.target.innerText);
            displayed = e.target.innerText;
            operation.firstPart = displayed;

            //Update Screen
            screen.textContent = displayed;
            
        } else {
            console.log("Pressed: ", e.target.innerText);
            displayed =`${displayed}`+`${e.target.innerText}`;
            operation.firstPart = displayed;

            //Update Screen
            screen.textContent = displayed;
        }
    } else {
            console.log(e.target.innerText, " is not a Number!");
        }
}

function clearDisplay() {
    displayed = "0";
    screen.textContent = displayed;

    operation.firstPart = "";
    operation.operator = null;
    operation.secondPart = "";

    console.log("The process got cleared!")
}

clear.addEventListener("click", clearDisplay);

cells.forEach(cell => {
    cell.addEventListener("click", e => {
        numberPressed(e);
    })
})
