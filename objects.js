const person = {name: '', age: 0};
console.table(person);

const alan = {name: '', age: 0};
console.table(person);


const bruce = {name: 'Luke', age: 29};
const nils = {name: 'Peter', age: 400};

// so we want to put object literals in a collection their props/attr are not uniform

const bandOfLiterals = [];
bandOfLiterals.push(nils);
bandOfLiterals.push(bruce);

for(let member of bandOfLiterals){
    console.log(member.name);
}

//we need a way of making objects with the same properties ES5 way is a function constructor
function Musician(name, age, ...instruments){// rest operator, for the rest of the arguments they will be instruments
    this.name = name;
    this.age = age;
    this.instruments = [...instruments];
} 
const alanFC = new Musician('Alan', 54, 'keyboard', 'potato', 'triangle');
const peterFC = new Musician('Peter', 23, 'guitar', 'potato', 'keyboard');

const bandOfFunctions = [];
bandOfFunctions.push(alanFC);
bandOfFunctions.push(peterFC);

for(let member of bandOfFunctions){
    console.log(member.name);
    console.log(member.instruments);
}