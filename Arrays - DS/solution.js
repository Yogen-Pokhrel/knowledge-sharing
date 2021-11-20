
function reverseArray(a) {
    // Write your code here
    let temp = [];
    for(let i = a.length-1; i >= 0; i--){
        temp.push(a[i]);
    }
    return temp;

}
