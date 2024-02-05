// set variables
// let firstNum = ;
// let secondNum = ;
// let operator = ;

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