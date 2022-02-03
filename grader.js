function grade(mark){
    var grade = '';
    if (mark >= '90'){
        grade = 'A'
    } else if(mark >= '80'){
        grade = 'B'
    } else if(mark >= '70'){
        grade = 'C'
    } else if(mark >= '60'){
        grade = 'D'
    } else if(mark >= '50'){
        grade = 'E'
    } else {
        grade = 'F'
    } return grade
}

var more = true
while(more) {
    var toBeGraded = prompt('Please enter your grade here')
    alert(grade(toBeGraded));
    var anyMore = prompt('Are there any more to be graded? Type Y or N')
    if(anyMore == 'Y' | 'y'){
        more = true
    } else if(anyMore == 'N' | 'n'){
        more = false
        break;
    } else {
        prompt('Please enter the correct values in the next dialog box')
    }
}