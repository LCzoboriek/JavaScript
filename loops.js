// a loop is a block of code as is a condtional 
//  but is repeated either a number of times of for
//  elements in a collection
//  each time the counter changes, or for each member of the collection
// the loop code gets run

const band = [
    'Steve',
    'Paul',
    'Ringo',
    'Gary',
    'Danny',
    'Paul S'
];

// Conventional for loop with continue
// console.log('using continue:\n');
// for (let i = 0; i < band.length; i++){
//     if(band[i] === "Gary"){
//         continue;
//     }
//     console.log(band[i]);
// }

// Conventional while loop

let counter = 0;
while (counter < band.length){
    console.log(band[counter]);
    counter++;
}



// Conventional do while loop
let counter2 = 0;
do {
    console.log(band[counter2]);
    counter2++;
} while (counter2 < band.length);
// Suited to use cases where a loop must run at least once