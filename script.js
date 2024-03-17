let display = document.getElementById("display");
let firstNumber = "";
let operator = "";

function Display(num) {
    firstNumber += num;
    display.value += num;
}

function clearDisplay() {
    display.value = "";
    firstNumber = "";
    operator = "";
}

function appendOperator(op) {
    display.value += op; 
    operator = op;
}

function appendDecimal() {
    if (!firstNumber.includes(".")) {
        firstNumber += ".";
        display.value = firstNumber;
    }
}

function calculate() {
    if (operator === "" || firstNumber === "") {
        return; 
    }

    let result;
    const secondNumber = display.value.substring(display.value.indexOf(operator) + 1);
    
    switch (operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            if (parseFloat(secondNumber) !== 0) {
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
            } else {
                result = "Error"; 
            }
            break;
        default:
            result = "Error";
    }

    display.value = result;
    firstNumber = result.toString();
    operator = "";
}
