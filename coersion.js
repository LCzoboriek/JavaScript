// Coersion is the changing of values from one data type to another

let yearNumber = 1995;
console.log(yearNumber + 1);
console.log(yearNumber - 1);

let yearString = "1995";
console.log(yearString + 1);
console.log(yearNumber == yearString); // same value string (digits to number)
console.log(yearNumber === yearString); // false: same value but different type

//All or most comparisons in js are ===, == allows for coersion of one or more operands