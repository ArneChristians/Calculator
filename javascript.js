const cells = document.querySelectorAll(".cell");
const screen = document.getElementById("screen");

function isNumber(text) {
    return /^[0-9]$/.test(text.trim());
}

function typing () {
    if (isNumber(e.target.innerText)){
            screen.textContent =`${screen.textContent}`+`${e.target.innerText}`;
            console.log("Pressed: ", e.target.innerText);
    }
}

cells.forEach(cell => {
    cell.addEventListener("click", e => {
        if (isNumber(e.target.innerText)){
            screen.textContent =`${screen.textContent}`+`${e.target.innerText}`;
            console.log("Pressed: ", e.target.innerText);
        } else {
            console.log(e.target.innerText, " is not a Number!");
        }
})
})