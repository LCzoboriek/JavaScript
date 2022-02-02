// Coersion is the changing of values from one data type to another

let yearNumber = 1995;
console.log(yearNumber + 1);
console.log(yearNumber - 1);

let yearString = "1995";
console.log(yearString + 1);
console.log(yearNumber == yearString); // same value string (digits to number)
console.log(yearNumber === yearString); // false: same value but different type

//All or most comparisons in js are ===, == allows for coersion of one or more operands

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
// Object.is was developed for edge cases if youre dealing with rareties like NaN

console.log(1 / 0); // Infinity

//Explicit coersion methods:

// strings-to-numbers
console.log(100+'1'); //1001 as a string
//way 1
console.log(100+ parseInt('1')); // 101 as a number, so you could potentially allow user input on a front end to become a integer by using parseInt, even if the object type is string 

console.log(100+ Number('1')); // Also 101 using a constructor function of number class, this is the most readable way to use, so most used

console.log(100+ +'1'); // 101 as its unary + operator

// there are object wrapper classes for primitives eg number, String

console.log(Boolean('')); // boolean of an empty string is false
console.log(Boolean('String')); // true for any string that has things contained within it. This could be a good way of determining if someone enters characters for a password or leaves it blank, same for username
console.log(Boolean(0));//false zero numbers
console.log(Boolean(1));//true, as values are contained, doesn't have to be positive numbers, can be negative, its just any non zero number
console.log(Boolean({a:1, b:2})); // true: any object
console.log(Boolean({})); // also true as it includes empty objects

// We can truthy/falsy values from any data by the !! operator

console.log(!true); // false
console.log(!false); // true
console.log(!!true);
console.log(!!false);
console.log(!!'');// False 
console.log(!'');//true
console.log(!!'x');//true
// The first ! coerces data into the oppposite of what it is in Boolean terms
// The second !! flips the value from true to false, or false to true

// Compound + operator

var x = 1;
// We can count up in one of four ways
var x = x + 1;
console.log(x); // 2
x += 1;
console.log(x); // 3
x ++; // One and one only added
console.log(x); // 4
++x;
console.log(x); // 5

