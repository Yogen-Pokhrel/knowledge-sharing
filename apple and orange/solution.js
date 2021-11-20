function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    var apples_distance = [], orange_distance = [];
    var apples_in_range = 0, oranges_in_range = 0;
    apples_distance = apples.map(function(x){
        return x + a;
    })
     orange_distance = oranges.map(function(x){
        return x + b;
    })
    apples_distance.forEach(function(x){
        if(x >= s && x <= t){
            apples_in_range++;
        }
    })
     orange_distance.forEach(function(x){
        if(x >= s && x <= t){
            oranges_in_range++;
        }
    })
     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
     ws.write(apples_in_range + '\n');
     ws.write(oranges_in_range+'');
     ws.end();
    // return [apples_in_range, oranges_in_range];
}
