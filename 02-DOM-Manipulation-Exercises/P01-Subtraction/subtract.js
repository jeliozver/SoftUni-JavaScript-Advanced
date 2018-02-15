window.onload = function () {
    subtract();
};

function subtract() {
    let numOne = Number(document.getElementById('firstNumber').value);
    let numTwo = Number(document.getElementById('secondNumber').value);
    let result = numOne - numTwo;
    document.getElementById('result').textContent = result.toString();
}