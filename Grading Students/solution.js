
function gradingStudents(grades) {
    // Write your code here
    var result = [], nextMultiple = 0;
    grades.forEach(function(x) {
        if(x > 37){
            nextMultiple = (5 - x%5) + x;
            if((nextMultiple - x) < 3){
                result.push(nextMultiple)
            }else{
                result.push(x);
            }
        }else{
            result.push(x);
        }
    })
    return result;
}
