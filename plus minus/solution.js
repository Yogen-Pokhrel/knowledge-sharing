function plusMinus(arr) {
    // Write your code here
    var minus_ratio = 0, plus_ratio = 0, zero_ratio = 0, result_arr = [0], ratios = [];
    arr.forEach(function(x){
        switch(x){
            case x>0 : result_arr[0] + 1;break;
            case x<0 : result_arr[1] + 1;break;
            case x=0 : result_arr[2] + 1;break;
        }
    })
    
    ratios[0] = result_arr[0] / arr.length;
    ratios[1] = result_arr[1] / arr.length;
    ratios[2] = result_arr[2] / arr.length;
    return result_arr;

}
