
function diagonalDifference(arr) {
    // Write your code here
    var difference = 0;
    var x_diagonal = 0, y_diagonal = 0;
    var index = 0;
    for(var i = 0; i< arr.length; i++){
        for(var j = 0; j< arr[i].length; j++){
            if(j == index){
                index++;
                x_diagonal += arr[i][j];
                break;
            }
        }
    }
    index = arr.length - 1;
      for(var i = 0; i< arr.length; i++){
        for(var j = 0; j< arr[i].length; j++){
            if(j == index){
                index--;
                y_diagonal += arr[i][j];
                break;
            }
        }
    }
    
    difference = x_diagonal - y_diagonal;
    return Math.abs(difference);

}
