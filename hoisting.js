// The apparent order of code is turned on its head
// this makes perfect sense when you realise that
// function declarations are loaded into memory at the start
// first pass of the V8 Chromium Engine, ie the browser javascript interpreter
// looks for declarations, second pass looks for expressions and third and subsequent passes is runtime exec code
console.log(goodMorning());

function goodMorning(){ //Functions and variable declarations are loaded first on a js file
    a = "good ";
    b = "morning";
    return a + b;
}
var a, b;