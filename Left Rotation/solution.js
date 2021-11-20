function rotateLeft(d, arr) {
    // Write your code here
    if(d == 0){
        return arr;
    }
    
    var ele, temp = [], pos = d;
    for(var i = 0; i<arr.length; i++){
        temp.push(arr[pos]);
        pos++;
        if(pos >= arr.length){
            pos = 0;
        }
    }
    return temp;

}
