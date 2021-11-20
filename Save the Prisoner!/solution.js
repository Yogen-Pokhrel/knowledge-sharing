function saveThePrisoner(n, m, s) {
    // Write your code here
 var position = 0;
    if(n < m){
         var lengthOfSweets = Math.floor(m % n);
    }else{
         var lengthOfSweets = m
    }
    // lengthOfSweets = (lengthOfSweets < 0) ? m : lengthOfSweets;
    position = s + lengthOfSweets - 1;
    if(position > n){
        position = position - n;
    }
    if(position < 1){
        position  = n - position
    }
    return position ;
}
