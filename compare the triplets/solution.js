function compareTriplets(a, b) {
    // Write your code here
    var result = [0, 0];
    for(var i = 0 ; i< a.length; i++){
        if(a[i] > b[i]){
            result[0]++;
        }else if(a[i] < b[i]){
            result[1]++;
        }
    }
    return result;

}