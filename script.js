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


input.addEventListener('click', function (e) {
    let element = e.target;
    let isNumber = (element.id == "zero" || element.id == "one" || element.id == "two" || element.id == "three" || element.id == "four" ||
        element.id == "five" || element.id == "six" || element.id == "seven" || element.id == "eight" || element.id == "nine");
    let isDecimal = (element.id == "decimal");
    let isOperator = (element.id == "addition" || element.id == "subtraction" || element.id == "multiplication" || element.id == "division");
    let isEquals = (element.id == "equals");
    let isClear = (element.id == "clear");
    let checker = (result.textContent.includes(addition.textContent) || result.textContent.includes(subtraction.textContent) || 
    result.textContent.includes(multiplication.textContent) || result.textContent.includes(division.textContent));
    console.log(`checker is ${checker}`);

    // console.log(element.id, typeof(element.id));
    // console.log(`isNumber is ${isNumber}`);
    // console.log(`isDecimal is ${isDecimal}`);
    // console.log(`isOperator is ${isOperator}`);
    // console.log(`isEquals is ${isEquals}`);
    // console.log(`isClear is ${isClear}`);

    let value = element.textContent;

    console.log(`${value} was clicked`);

    // console.log(value);

    console.log(`result.textContent is ${result.textContent}\nresult.textContent.slice(-1) is ${result.textContent.slice(-1)}`);

    if ((isNumber || isDecimal) && result.textContent == "0") {
        console.log(`(isNumber || isDecimal) : ${(isNumber || isDecimal)}\nresult.textContent == '0' : ${result.textContent == "0"}`);
        console.log(`((isNumber || isDecimal) && result.textContent == "0") : ${((isNumber || isDecimal) && result.textContent == "0")}`);
        result.textContent = value;
    }
    else if ((isNumber || isDecimal) && !checker) {
        console.log(`(isNumber || isDecimal) : ${(isNumber || isDecimal)}\n(!checker : ${(!checker)})`);
        console.log(`((isNumber || isDecimal) && (!checker)) : ${((isNumber || isDecimal) && (!checker))}`);
        result.textContent += value;
    }
    else if ((isNumber || isDecimal) && (checker)) {
        console.log(`(isNumber || isDecimal) : ${(isNumber || isDecimal)}\n(checker : ${(checker)})`);
        console.log(`((isNumber || isDecimal) && (checker)) : ${((isNumber || isDecimal) && (checker))}`);
        result.textContent += value;
    }

    if (isOperator && (!checker)) {
        console.log(`isOperator : ${isOperator}\n(!checker : ${(!checker)})`);
        console.log(`(isOperator && (!checker)) : ${(isOperator && (!checker))}`);
        operator = value;
        result.textContent += value;
    }
    else if (isOperator && (checker)) {
        console.log(`isOperator : ${isOperator}\n(checker : ${(checker)})`);
        console.log(`(isOperator && (checker)) : ${(isOperator && (checker))}`);
        operator = value;
        result.textContent = result.textContent.replace(/.$/,value);
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