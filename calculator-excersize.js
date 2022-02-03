// Number prompt asigned to a variable var num1 = Number(prompt('enter a number: '))

var num1 = Number(prompt('Enter the first number: '));
var num2 = Number(prompt('Enter the second number: '));
var operator = prompt('Enter the operator to be used: ');
var result = 0;

switch(operator){
    // test variable for equality with multiple case statements
    case '+': result = num1 + num2;
            break;
    case '-': result = num1 - num2;
            break;
    case '*': result = num1 * num2;
            break;
    case '/': result = num1 / num2;
    default: alert('Please enter a required operator')
}

alert('The result is: ' + result);