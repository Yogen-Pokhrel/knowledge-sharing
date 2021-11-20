function simpleArraySum(ar) {
    // Write your code here
    var sum = 0;
    ar.forEach(function(x){
        sum += x;
    })
    return sum;
}
