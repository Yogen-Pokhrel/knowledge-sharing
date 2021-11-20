function climbingLeaderboard(ranked, player) {
    // Write your code here
    var result_array = [], rank = 1;
    let unique_array = [...new Set(ranked)];
    for(var j = 0; j < player.length; j++){
    rank = 1;
        for(var i = 0; i < unique_array.length; i++){
            if(player[j] >= unique_array[i]) continue;
            rank++;
        }
        result_array.push(rank);
    }
    return result_array;
}