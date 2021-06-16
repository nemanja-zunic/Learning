class Calculator {
  last_result;

  sum(number1, number2) {
    return number1 + number2;
  }
  sub(number1, number2) {
    return number1 - number2;
  }
  divide(number1, number2) {
    return number1 / number2;
  }
  multiply(number1, number2) {
    return number1 * number2;
  }

}

const calculator = new Calculator;

console.log('Sum =', calculator.sum(6, 8));
console.log('Sub =', calculator.sub(6, 8));
console.log('Divide =', calculator.divide(6, 8));
console.log('Multiply =', calculator.multiply(6, 8));