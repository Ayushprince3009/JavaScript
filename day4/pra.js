function sum(n){
    let res = 0;
    while(n>0){
        res += n;
        n--;
    }
    return res;
}
console.log(sum(500));