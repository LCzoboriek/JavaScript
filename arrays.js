const band = [
    'Bruce',
    'Patti',
    'Stevie',
    'Nils',
    'Tom',
    'Max',
    'Gary',
    'Danny',
    'Soozie',
    'Clarence',
    'Jake'
    ];
//Array function construictor
const band2 = new Array(band);
//Array function constructor, values passed in directly
// const band3 = new Array[

//     'Bruce',
//     'Patti',
//     'Stevie',
//     'Nils',
//     'Tom',
//     'Max',
//     'Gary',
//     'Danny',
//     'Soozie',
//     'Clarence',
//     'Jake'
//     ];

console.table(band);
console.table(band2);
// console.table(band3);

// One number in pares is intial size

const myEmptyArray = new Array(20);
console.log(myEmptyArray);

myEmptyArray[0] = 'Bruce';
console.table(myEmptyArray);

for(let member of myEmptyArray){
    console.log(member);
}

myEmptyArray.forEach(el => console.log(el));

//copy array elements from one to another

for(let member of band2){
    myEmptyArray.push(member)
}

console.log(myEmptyArray);

//Getting elements from an array

var stevie = myEmptyArray[23];
console.log(stevie);

// Array.prototype.slice() - Does not mutate
// Array.prototype.splice() - does mutate

// let restOfBand = myEmptyArray.slice(20, )

// Look at array methods and ask do theynchange the original or return a copy of the original with the changes
// Array.prototype.map is an important one to look at, returns a new array with transformation function applied to each member
// Array.prototype.filter returns a new array with only those members that pass a test (predicate function)

// Say we want the bands to be uppercase

const shoutyBand = band.map(e => e.toUpperCase());
console.log(shoutyBand);
// [
//     'BRUCE',  'PATTI',
//     'STEVIE', 'NILS',
//     'TOM',    'MAX',
//     'GARY',   'DANNY',
//     'SOOZIE', 'CLARENCE',
//     'JAKE'
//   ]
// notice weve made a transformation but have not affected the original array
// This is a filter function, it assigns a new array to a const but only adds names with the element where the length is less then or equal to 4
const shortBandNames = band.filter(e => e.length <= 4);
console.log(shortBandNames);
// [ 'Nils', 'Tom', 'Max', 'Gary', 'Jake' ] - Output
// These array methods can be chained together in a pipeline
console.log(band.map(e => e.toUpperCase()).filter((e) => e.length <= 4));
// [ 'NILS', 'TOM', 'MAX', 'GARY', 'JAKE' ] - Result

// sort splice map slice for the excersize

