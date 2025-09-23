const cells = document.querySelectorAll(".cell");
const screen = document.getElementById("screen");
const clear = document.getElementById("CE");
const clearCur = document.getElementById("C");

//checks
function isNumber(text) {
    return /^[0-9]$/.test(text.trim());
}

function isOperator(text) {
    return 
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
    operator: null,
    secondPart: "",
}

function displaysZero() {
    return displayed === "0";
}

//logic for pressing a number button
function numberPressed(e) {
    if (isNumber(e.target.innerText)){
        //logic to write the first number block (before a operator is selected)
        if(operation.operator == null) {
            if(displaysZero()) {
                console.log("Pressed: ", e.target.innerText, " and added it to firstPart");
                displayed = e.target.innerText;
                operation.firstPart = displayed;

                //Update Screen
                screen.textContent = displayed;
                
            } else {
                console.log("Pressed: ", e.target.innerText, " and added it to firstPart");
                displayed =`${displayed}`+`${e.target.innerText}`;
                operation.firstPart = displayed;

                //Update Screen
                screen.textContent = displayed;
            }
        //logic to write the second number block (after a operator is selected)
        } else {
                //add to secondPart
            }
    } else {
                console.log(e.target.innerText, " is not a Number!");
}
}

//logic for pressing a operator button
function operatorPressed(e) {

}


//clear functions block start
function clearDisplay() {
    displayed = "0";
    screen.textContent = displayed;

    operation.firstPart = "";
    operation.operator = null;
    operation.secondPart = "";

    console.log("The process got cleared!")
}

function clearCurrent() {
    if(operation.secondPart != "") {
        console.log("Second part has a value in it");
        operation.secondPart = "";

        //Reset Screen to initial value
        displayed = "0";
        screen.textContent = displayed;
    } else if (operation.firstPart != ""){
        console.log("First part has a value in it");
        operation.firstPart = "";

        //Reset Screen to initial value
        displayed = "0";
        screen.textContent = displayed;
    } else {
        console.log("No value to clear!")
    }
}

clear.addEventListener("click", clearDisplay);
clearCur.addEventListener("click", clearCurrent);
//clear function block end



cells.forEach(cell => {
    cell.addEventListener("click", e => {
        numberPressed(e);
    })
})


