let trainees = [
    "Paul",
    "Peter",
    "Luke",
    "Emily",
    "Matt",
    "Jay"
]

let allTrainees = ''

for(let trainer of trainees){
    allTrainees += trainer + '\n';
}
console.log(allTrainees);
trainees.push('David');
console.log(trainees);
trainees.sort();
console.log(trainees);
