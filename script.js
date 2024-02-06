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
    return x / y;
}

// create operate function
function operate(firstNum, operator, secondNum) {

    // test
    // console.log(`firstNum = ${firstNum} : ${typeof (firstNum)}`);
    // console.log(`secondNum = ${secondNum} : ${typeof (secondNum)}`);
    // console.log(`operator = ${operator} : ${typeof (operator)}`);
    // console.log(`firstNum, operator, secondNum = ${firstNum + operator + secondNum}`);
    // console.log(`operator=="+" is ${operator == "+"}`);

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

let checker = addition.textContent || subtraction.textContent || multiplication.textContent || division.textContent;

input.addEventListener('click', function (e) {
    let element = e.target;
    let isNumber = (element.id == "zero" || element.id == "one" || element.id == "two" || element.id == "three" || element.id == "four" ||
        element.id == "five" || element.id == "six" || element.id == "seven" || element.id == "eight" || element.id == "nine");
    let isDecimal = (element.id == "decimal");
    let isOperator = (element.id == "addition" || element.id == "subtraction" || element.id == "multiplication" || element.id == "division");
    let isEquals = (element.id == "equals");
    let isClear = (element.id == "clear");
    // console.log(element.id, typeof(element.id));
    // console.log(`isNumber is ${isNumber}`);
    // console.log(`isDecimal is ${isDecimal}`);
    // console.log(`isOperator is ${isOperator}`);
    // console.log(`isEquals is ${isEquals}`);
    // console.log(`isClear is ${isClear}`);

    let value = element.textContent;

    // console.log(value);

    if ((isNumber || isDecimal) && result.textContent == "0") {
        result.textContent = value;
    }
    else if ((isNumber || isDecimal) && (result.textContent.slice(-1) != checker)) {
        result.textContent += value;
    }
    else if ((isNumber || isDecimal) && (result.textContent.slice(-1) == checker)) {
        result.textContent += value;
    }

    if (isOperator && (result.textContent.slice(-1) != checker)) {
        operator = value;
        result.textContent += value;
    }
    else if (isOperator && (result.textContent.slice(-1) == checker)) {
        operator = value;
        result.textContent.slice(0, -1) += value;
    }


    if (isEquals) {

        let secondNum = Number(result.textContent.substring((result.textContent.indexOf(operator) + 1)));
        let firstNum = Number(result.textContent.substring(0, result.textContent.indexOf(operator)));

        console.log(`firstNum is ${firstNum}`);
        console.log(`secondNum is ${secondNum}`);
        console.log(`operator is ${operator}`);


        result.textContent = parseFloat(Number(operate(firstNum, operator, secondNum).toFixed(5)));
    }


    if (isClear) {
        result.textContent = "0";
    }
});