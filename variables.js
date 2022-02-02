var width; //Reserves memory for first occurence of our own variable

console.log(width);
// First this is undefined
width = 42;
// now its a number
console.log(width);
// show the value
console.log(typeof width);
// shows the type of
var width;
// what happens now?
console.log(width); 
// retains the information as its stored in memory

let height;
console.log(height);
// undefined
height = 20.2;
console.log(height);
// variables declared with let cannot be re-declared
// let height; // Syntax error

// Variables declared with var and let may be reassigned a different type
width = true;
height = 'yay high';
console.log(width);
console.log(typeof width);
console.log(height);
console.log(typeof height);

