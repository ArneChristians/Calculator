const cells = document.querySelectorAll(".cell");
const screen = document.getElementById("screen");
const clear = document.getElementById("CE");
const clearCur = document.getElementById("C");
const equals = document.getElementById("equals");

let displayed = screen.textContent;

//checks
function isNumber(text) {
    return /^[0-9]$/.test(text.trim());
}

function isOperator(text) {
    const operators = ["+", "-", "*", "/"];
    return operators.includes(text);
}

// operations
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    let error = "Can't divide by 0";
    const x = Number(a);
    const y = Number(b);

    if (y === 0) {
        return error;
    }

    return x / y;
}

const operation = {
    firstPart: "",
    operator: null,
    secondPart: "",
    result: "",
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
                if (displaysZero()) {
                    console.log("Pressed: ", e.target.innerText, " and added it to secondPart");
                    displayed = e.target.innerText;
                    operation.secondPart = displayed;

                    //Update Screen
                    screen.textContent = displayed;
                } else if (displayed == operation.firstPart && operation.secondPart == "") {
                    console.log("Pressed: ", e.target.innerText, " and added it to secondPart");
                    displayed = e.target.innerText;
                    operation.secondPart = displayed;

                    //Update Screen
                    screen.textContent = displayed;        
                } else {
                    console.log("Pressed: ", e.target.innerText, " and added it to secondPart");
                    displayed =`${displayed}`+`${e.target.innerText}`;
                    operation.secondPart = displayed;

                    //Update Screen
                    screen.textContent = displayed;
                }
            }
    } else {
                console.log(e.target.innerText, " is not a Number!");
}
}

//logic for pressing a operator button
function operatorPressed(e) {
    let pressedButton = e.target.innerText;
    //is targeted(clicked) element an operator and firstPart has something in it
    if(isOperator(pressedButton) && operation.firstPart != "") {
        console.log("Test completet! Operator has been clicked")
        //change operator obj's value to the operator that was clicked
        operation.operator = pressedButton;
    //Result is displayed
    } else if (isOperator(pressedButton) && operation.result != "") {
        operation.firstPart = operation.result;
        operation.result = "";
        operation.operator = pressedButton;
    }
}

//logic for pressing equals
function equalsPressed() {
    let first = operation.firstPart;
    let second = operation.secondPart;
    let op = operation.operator;
    
    // does firstPart, secondPart and operator contain a value?
    if(first != "" && second != "" && op != null) {
        //uses corosponding function to calculate the result
         switch(op){
            case "+":
                operation.result = add(first, second).toString();
                displayed = operation.result;

                //Update screen with result
                screen.textContent = displayed;
                break;
            case "-":
                operation.result = subtract(first, second).toString();
                displayed = operation.result;

                //Update screen with result
                screen.textContent = displayed;
                break;
            case "*":
                operation.result = multiply(first, second).toString();
                displayed = operation.result;

                //Update screen with result
                screen.textContent = displayed;
                break;
            case "/":
                operation.result = divide(first, second).toString();
                displayed = operation.result;

                //Update screen with result
                screen.textContent = displayed;
                break;
         }
         
        if (operation.result != "Can't divide by 0") {
            clearButResult(operation.result);
            console.log("Value is not divided by Zero")
        } else {
            clearDisplay();
            console.log("Value is divided by Zero")
        }   
    }
}

equals.addEventListener("click", equalsPressed);



//clear functions block start
function clearButResult (result) {
    operation.firstPart = result;
    operation.operator = null;
    operation.secondPart = "";
}

function clearDisplay() {
    displayed = "0";
    screen.textContent = displayed;

    operation.firstPart = "";
    operation.operator = null;
    operation.secondPart = "";
    operation.result = "";

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


//Click Events
cells.forEach(cell => {
    cell.addEventListener("click", e => {
        numberPressed(e);
        operatorPressed(e);
    })
})


