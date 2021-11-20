
function arrayManipulation(n, queries) {
    // Write your code here
    var arr = new Array(n);
    arr.fill(0)
    for(let i of queries){
        arr[i[0] - 1] += i[2];
        if(i[1] != arr.length){
            arr[i[1]] -= i[2];
        }
    }
    var maxval = 0;
    var itt = 0;
    for(var q of arr){
        itt += q;
        if(itt > maxval){
            maxval = itt;
        }
    }
    
    return maxval;

}
