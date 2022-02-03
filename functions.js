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


//Function declaration output no input

function greet4(){
    return "Hello world how are you today?"
}
console.log(greet4());

// Advanced functions:

// 5. Function declaration with a type check

function greet5(name){
    if(typeof name !== 'string'){
        return null;
    }
    return "Hello " + name + " How are you today?";
}

console.log(greet5("Suzie")); // Hello Suzie How are you today?
console.log(greet5()); // null
console.log(greet5(12345)); // null still as its not a string

// 6. Anon function expression
// function expressions are not loaded into memory at the start
// they are loaded where they occur in the code thus saving time and memory
// special uise cases for this include prototype manupulation in 00 JS - later
const noName = function(){
    return 'Something or other some text here';
}
console.log(noName());

// Arrow functions => not called fat arrows due to body shaming code ^-^
// are a form of anon function expression with a shortened syntax
// they are similar to Java Lambdas but in java they have an ultra specific execution context