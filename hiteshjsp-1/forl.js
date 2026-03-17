let mul = 5;
for(let i=1; i<=10; i++){
    let table = mul * i ;
    console.log(`${mul} * ${i} = ${mul*i}`);
}


for(let i=1; i<=10; i++){
    console.log(`Table of ${i}`);
    for(let j=1; j<=10; j++){
        console.log(`${i}*${j}=${i*j}`);
    }
}

let myArr = ['flash','batman','superman'];
console.log(myArr.length);
for(let i=0; i<myArr.length; i++){
    console.log(`superhero at index ${i} is: ${myArr[i]}`);
} 


////   brreak and continue

for(let i=1; i<=20; i++){
    console.log(i);                   //no break and continue
}

//// breakkkkkkkkkkkk

for(let i=1; i<=20; i++){
    if(i==5){
        console.log(`${i} encountered exit loop`)
        break;
    }
    console.log(i);
}

//// continueeeeeeeeee

for(let i=1; i<=20; i++){
    if(i==5){
        console.log(`escape ${i}`)
        continue;
    }
    console.log(i);
}

