function dynamicArray(n, queries) {
    // Write your code here
    let lastAnswer = 0;
    let arr = [];
    let answer = [];
    for(let i = 0; i< n; i++){
        arr[i] = [];
    }
    let index = 0, idx = 0;
    for(let j = 0; j< queries.length; j++){
        for(let i = 0; i< queries[j].length; i = i+3){
            if(j < n){
            arr[((queries[j][i+1]^lastAnswer)%n)] = queries[j][i+2];
            }else{
                idx = (queries[j][i+1]^lastAnswer) % n;
                index = queries[j][i+2] % arr[idx].length;
                lastAnswer = arr[idx][index];
                answer.push(lastAnswer);
            }
        }
     }
    return answer;

}