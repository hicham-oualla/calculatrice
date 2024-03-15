let display = document.getElementById("display");
let firstNumber = 0;
function Display(num) {
    firstNumber = num;
    display.value += firstNumber;
    
}
function clearDisplay(){
    display.value = "  ";

}
function appendOperator(op) {
    display.value += op; 
    step ++;
    operation = op;
}