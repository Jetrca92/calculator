function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    if (operator === "+") {
        add(x, y);
    }
    else if (operator === "-") {
        substract(x, y);
    }
    else if (operator === "*") {
        multiply(x, y);
    }
    else if (operator === "÷") {
        divide(x, y);
    } 
}
let displayValue = "";
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', function () {
    const data = button.dataset.number;
    if (data) {
        const screenLarge = document.querySelector('.screen-large');
        screenLarge.innerHTML += data;
        displayValue += data;
    }
    const operator = button.dataset.operator;
    if (operator) {
        const screenSmall = document.querySelector('.screen-small');
        screenSmall.innerHTML = displayValue + " " + operator;
    } 
    
}));