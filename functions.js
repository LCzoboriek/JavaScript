console.log('Hello');
console.log('World');
console.log('How are you today?');

// Essential

// 1. function declaration
// function declarations are loaded into memory at the start
// no input, no output
function greet1(){
    console.log("Hello");
    console.log("world");
    console.log("How are you today?");
}
greet1();

// Like this, without a return statement, we cannot persist output and pass it on. 
var greet1 = greet1();
console.log('greet1: ' + greet1); // Undefined

function greet2(name){
    console.log("Hello");
    console.log(name);
    console.log("How are you today?");
}
greet2("Luke");

//Still cannot pass output to other parts of the program
var result2 = greet2("Patty");
console.log('greet2: ' + greet2("Patty")); //greet2: undefined

//Function declaration
//input and output
function greet3(name){
    return "Hello " + name + " how are you today?"; // you must have a return statement if you want to pass result to other factors in your code
}
greet3("Peter");
// no console output without passing the result of the function to CLG
console.log(greet3("Peter"));


