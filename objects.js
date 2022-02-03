const person = {name: '', age: 0};
console.table(person);

const alan = {name: '', age: 0};
console.table(person);

const alan = {name: 'John turner', age: 50};
const bruce = {name: 'Luke', age: 29};
const nils = {name: 'Peter', age: 400};

// so we want to put object literals in a collection their props/attr are not uniform

const bandOfLiterals = [];
bandOfLiterals.push(Alan);
bandOfLiterals.push(Peter);
bandOfLiterals.push(Bruce);

for(let member of bandOfLiterals){
    console.log(member.name);
}

//we need a way of making objects with the same properties ES5 way is a function constructor
function Musician(name, age, ...instruments){// rest operator, for the rest of the arguments they will be instruments
    this.name = name;
    this.age = age;
    this.instruments = [...instruments];
} 