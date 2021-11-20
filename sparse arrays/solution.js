function matchingStrings(strings, queries) {
    // Write your code here
    var temp = [], itemCount = 0;
    for(let i = 0; i< queries.length; i++){
        itemCount = 0;
        for(let j = 0; j<strings.length; j++){
            if(queries[i] == strings[j]){
                itemCount++;
            }   
        }
        temp.push(itemCount);
    }
    return temp;
}