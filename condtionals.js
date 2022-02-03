// A conditional is a program flow structure that takes a boolean
// expression which if true the block executes immediately after
// ()
// if FALSE skips that block and resumes normal oeprations
// 
// 1. No branches

if(false){
    console.log('code in the block is executed')
}

// 2. one branch
if(true){
    console.log('code is now executed');
} else {
    console.log('code in the else block executed');
}

// 3. Multiple branches
if (false) {
    console.log('code in the first block executed');
} else if (true) {
    console.log('code in the second block is executed');
} else {
    console.log('code in the else block executed');
}

// There is no limit to the number of if...else you can use
// SWITCH statement
// interchangeable with if...else
// Python has no switch

let variable = 2;
switch(variable){
    // test variable for equality with multiple case statements
    case 1: console.log('the variable is 1');
            break;
    case 2: console.log('the variable is 2');
            break;
    case 3: console.log('the variable is 3');
            break;
    default: console.log('please choose an option 1, 2 or 3');
}

// if a switch is used with break statements,
// the first matching case will be executed
// and all those below
// this is special edge case mainly
// but is how switch was originally designed
// with breaks: exact same as if else
// without breaks: special behaviour
// III ternary operator


let loggedInComponent = '<p> Admin Component </p>';
let loggedOutComponent = '<p> Guest component </p>'; 
let isLoggedIn = true;
// the condition is first (isLoggedIn)?, the return value is the first one if true, and then the return value for the second one if false
let displayToUser = (isLoggedIn)? loggedInComponent : loggedOutComponent;
console.log(displayToUser);