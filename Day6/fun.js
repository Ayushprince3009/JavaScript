function dance(){
    console.log("dance");
    console.log("Let's dance")
}

dance();
dance();
dance();
dance();
dance();
dance();


let dance = function(){
    console.log("Dance");
    console.log("Let's Dance");
}
dance();

function add(v1=1,v2=4){    //agar value paas nhi aata h to v1 v2 apna value use krega aur return krega sum 
    console.log(v1+v2);
}
add(2,8);


function abcd(a,b,c,...val){
    console.log(val);
}

abcd(1,2,3,4,5,6,7,8,9);
abcd('ayushkumarprince')

function abcd(v){
    return 12+v;
}

let val = abcd(44);
console.log(val);

let arr = [23,45,76,87,1,2,32,11,8];
console.log(arr);
let str = arr.sort(function(a,b){
    return a-b;
});

console.log(str);

let abc = arr.sort();
console.log(abc);
