function insertionSort(arr) {
    // Write your code here
    var sortedArray = arr, shifts = 0, totalShifts = 0, temp;
    for(var i = 0; i < arr.length - 1; i = i + 2){
        shifts = 0;
        for (var j = i + 1; j< arr.length; j++){
            if(sortedArray[i] > sortedArray[j]){
                sortedArray.splice(i, 0, sortedArray[j]);
                sortedArray.splice(j + 1, 1);
                shifts += j - i;
            }
        }
        totalShifts += shifts;
    }
    return totalShifts;
}