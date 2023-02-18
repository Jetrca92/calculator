// Functions for basic math operators
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

// Calls functions for different operators
function operate(operator, x, y) {
    if (operator === "÷" && y === 0) {
        return alert("You can't divide by zero!");
    }
    switch(operator) {
        case "+":
            return parseFloat((add(x, y)).toFixed(5));
        case "-":
            return parseFloat((substract(x, y)).toFixed(5));
        case "×":
            return parseFloat((multiply(x, y)).toFixed(5));
        case "÷":
            return parseFloat((divide(x, y)).toFixed(5));
        default:
            throw new Error(`Invalid operator: ${operator}`);
    }
}

// Add event listeners to buttons, store data in variables and display on screen
const buttons = document.querySelectorAll('.btn');
const screenLarge = document.querySelector('.screen-large');
const screenSmall = document.querySelector('.screen-small');
let displayValue = "";
let x;
let y;
let op;
buttons.forEach(button => button.addEventListener('click', function () {
    const data = button.dataset.number;
    const operator = button.dataset.operator;
    if (data) {
        screenLarge.innerHTML = displayValue;
        screenLarge.innerHTML += data;
        displayValue += data
        
    }
    if (operator) {
        screenSmall.innerHTML = displayValue + " " + operator;
        screenLarge.innerHTML = displayValue;
        
        
        // Store numbers before the operator as x, clear displayValue
        if (!x) {
            op = operator;
            x = parseFloat(displayValue);
            displayValue = "";
        }
        // Logic for stringin together several operators
        else {
            y = parseFloat(displayValue);
            displayValue = operate(op, x, y).toString();
            screenLarge.innerHTML = displayValue;
            screenSmall.innerHTML = displayValue + " " + operator;
            y = undefined;
            x = displayValue;
            displayValue = "";
            op = operator;
        }
    }
    if (button.id === "equalsBtn") {
        // Prevents error from presing equalsBtn many times
        if (!op && !x && !y) {
            return;
        }
        // Store y
        y = parseFloat(displayValue);
        displayValue = operate(op, x, y).toString();
        screenLarge.innerHTML = displayValue;
        screenSmall.innerHTML = x + " " + op + " " + y + " = " + displayValue; 
        y = undefined;
        x = undefined;
    }

    // Dot button
    if (button.id === "dotBtn") {
        displayValue += ".";
        screenLarge.innerHTML += ".";
    }

    // Clear
    if (button.id === "clearBtn") {
        displayValue = "";
        x = undefined;
        y = undefined;
        op = undefined;
        screenLarge.innerHTML = "";
        screenSmall.innerHTML = "";
    } 

    // Delete 
    if (button.id === "deleteBtn") {
        displayValue = displayValue.slice(0, -1);
        screenLarge.innerHTML = displayValue;
    }
    
}));