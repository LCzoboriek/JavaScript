var question1 = 'In what year did the Titanic sink on her maiden voyage?: '
var question2 = 'In what year did WW1 begin?: '
var question3 = 'In what year was the Qualification of Women act passed?: '
var answer1 = '1912'
var answer2 = '1914'
var answer3 = '1918'

for (var i = 1; i <= 3; i++) {
    var guess = '';
    switch(i){
        case 1: guess = prompt(q1);
                if(guess==a1){
                    alert('Right!');
                } else alert('Wrong... it was ' + a1);
        break;
        case 2: guess = prompt(q2);
        if(guess==a2){
                    alert('Right!');
                } else alert('Wrong... it was ' + a2);
        break;
        case 3: guess = prompt(q3);
        if(guess==a3){
                    alert('Right!');
                } else alert('Wrong... it was ' + a3);
        break;
        default: alert('enter a date in yyyy format');
    }
    
}
