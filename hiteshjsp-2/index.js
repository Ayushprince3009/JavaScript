const greeting = "hello world";
for(greet of greeting){
    if(greet == " "){
        break;
    }
    //console.log(`character is ${greet}`);
}

const num = [1,2,3,4,5,6,7,8,9];
for(number of num){
    //console.log(number);
}

//filter

const newNum = num.filter((n) => n>4 )
console.log(newNum);





