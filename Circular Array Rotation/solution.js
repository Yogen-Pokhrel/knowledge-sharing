function circularArrayRotation(a, k, queries) {
    // Write your code here
    var circularArray = [], answers = [];
    var rotation = 0;
    if(k > a.length){
        rotation = Math.floor(k%a.length);
    }else{
        rotation = k;
    }
    for(var i = 0; i < a.length; i++){
        var pos = i + rotation;
        if(pos < a.length){
            circularArray[pos] = a[i];
        }else{
            pos = pos - a.length;
            circularArray[pos] = a[i];
        }
    }
    queries.forEach(function(x){
        answers.push(circularArray[x]);
    })
    return answers;

}