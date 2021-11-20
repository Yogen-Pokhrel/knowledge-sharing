
function getTotalX(a, b) {
    // Write your code here
    var firstElement = b[0];
    var factorOfArrayA = a[a.length - 1];
    var j = 0, i = 0;
    var factors = [], factorsForBoth = [],isAFactor;
    let min = a[0];

    // while loop
    while (min <= firstElement) {
        isAFactor = true;
        a.forEach(function(x){
            if(min%x != 0){
                isAFactor = false;
            }
        })
        if(isAFactor){
            factors.push(min);
        }
        min++;
    }

    factors.forEach(function(x){
        isAFactor = true;
        b.forEach(function(xx){
            if(xx%x != 0){
                isAFactor = false;
            }
        })
        if(isAFactor){
            factorsForBoth.push(x);
        }
    })
    return factorsForBoth.length;

}