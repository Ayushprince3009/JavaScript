// for(let i=10; i>0; i--){
//     console.log(i);
// }

// for(let i=2; i<=20; i+=2){
//     console.log(i);
// }

// let i=1;
// while(i<=15){
//     console.log(i);
//     i+=2;
// }

// let n =5;
// for(let i=1; i<=10; i++){
//     console.log(`${n} * ${i} = ${n*i}`);
// }

// let sum = 0;
// for(let i=1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);

// let count = 0;
// for(let i=1; i<=100; i++){
//     if(i%3===0 && i%5===0){
//         count++;
//     }
// }
// console.log(count);

// for(let i=1; i<=100; i++){
    
//     if(i%7===0){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

// for(let i=1; i<=20; i++){
//     if(i%3===0){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

let num =0;
for(let i=1; i<=20; i+=2){
    if(i%2 === 1){
        console.log(i);
        num++;
    }

    if(num === 5){
        break;
    }
}