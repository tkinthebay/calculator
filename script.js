// set variables
// let firstNum = ;
// let secondNum = ;
// let operator = ;
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
    return x / y;
}

// create operate function
function operate(firstNum, operator, secondNum) {

    // test
    console.log(`firstNum = ${firstNum} : ${typeof (firstNum)}`);
    console.log(`secondNum = ${secondNum} : ${typeof (secondNum)}`);
    console.log(`operator = ${operator} : ${typeof (operator)}`);
    console.log(`firstNum, operator, secondNum = ${firstNum + operator + secondNum}`);
    console.log(`operator=="+" is ${operator=="+"}`);

    if (operator == "+") {
        return add(firstNum, secondNum);
    }
    else if (operator == "-") {
        return subtract(firstNum, secondNum);
    }
    else if (operator == "x") {
        return multiply(firstNum, secondNum);
    }
    else if (operator == "/") {
        return divide(firstNum, secondNum);
    }
    else {
        return "Syntax error.";
    }
};