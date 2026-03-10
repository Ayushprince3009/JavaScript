function arr(a){
    let res ='';
    for(let i=0; i<a.length; i++){
        res = res+a[i]; 
    }
    return res;
}
let final = arr(['aman','saman','manan','naman']);
console.log(final);