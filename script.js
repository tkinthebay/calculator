// set variables
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equals = document.getElementById("equals");
const result = document.getElementById("result");
const input = document.getElementById("input");
let firstNum = 0;
let secondNum = 0;
let operator = addition.textContent;

// create calculator functions
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y == 0) {
        return "nO dIvIsIoN bY zErO";
    }
    else {
        return x / y;
    }
}

// create operate function
function operate(firstNum, operator, secondNum) {

    if (operator == addition.textContent) {
        return add(firstNum, secondNum);
    }
    else if (operator == subtraction.textContent) {
        return subtract(firstNum, secondNum);
    }
    else if (operator == multiplication.textContent) {
        return multiply(firstNum, secondNum);
    }
    else if (operator == division.textContent) {
        return divide(firstNum, secondNum);
    }
    else {
        return "Syntax error.";
    }
};


input.addEventListener('click', function (e) {
    if (result.textContent == "nO dIvIsIoN bY zErO") {
        result.textContent = "0";
    }

    let element = e.target;
    let isNumber = (element.id == "zero" || element.id == "one" || element.id == "two" || element.id == "three" || element.id == "four" ||
        element.id == "five" || element.id == "six" || element.id == "seven" || element.id == "eight" || element.id == "nine");
    let isDecimal = (element.id == "decimal");
    let isOperator = (element.id == "addition" || element.id == "subtraction" || element.id == "multiplication" || element.id == "division");
    let isEquals = (element.id == "equals");
    let isClear = (element.id == "clear");
    let operatorChecker = (result.textContent.includes(addition.textContent) || result.textContent.includes(subtraction.textContent) ||
        result.textContent.includes(multiplication.textContent) || result.textContent.includes(division.textContent));
    let decimalChecker = ((result.textContent.includes(".") && !operatorChecker)) ||
        (result.textContent.substring(result.textContent.indexOf(operator) + 1).includes("."));

    let value = element.textContent;

    if ((isNumber || isDecimal) && result.textContent == "0") {
        result.textContent = value;
    }
    else if (isDecimal && decimalChecker) {
        result.textContent;
    }
    else if ((isNumber || isDecimal) && !operatorChecker) {
        result.textContent += value;
    }
    else if ((isNumber || isDecimal) && (operatorChecker)) {
        result.textContent += value;
    }
    else if (isOperator && (!operatorChecker)) {
        operator = value;
        result.textContent += value;
    }
    else if (isOperator && (operatorChecker) && result.textContent.slice(-1) == operator) {
        operator = value;
        result.textContent = result.textContent.replace(/.$/, value);
    }
    else if (isOperator && (operatorChecker)) {

        let secondNum = Number(result.textContent.substring((result.textContent.indexOf(operator) + 1)));
        let firstNum = Number(result.textContent.substring(0, result.textContent.indexOf(operator)));

        if (typeof (operate(firstNum, operator, secondNum)) == "number") {
            result.textContent = parseFloat(Number(operate(firstNum, operator, secondNum).toFixed(5))) + value;
            operator = value;
        }
        else {
            result.textContent = operate(firstNum, operator, secondNum);
        }
    }
    else if (isEquals) {

        let secondNum = Number(result.textContent.substring((result.textContent.indexOf(operator) + 1)));
        let firstNum = Number(result.textContent.substring(0, result.textContent.indexOf(operator)));

        if (typeof (operate(firstNum, operator, secondNum)) == "number") {
            result.textContent = parseFloat(Number(operate(firstNum, operator, secondNum).toFixed(5)));
        }
        else {
            result.textContent = operate(firstNum, operator, secondNum);
        }
    }
    else if (isClear) {
        result.textContent = "0";
    }
});