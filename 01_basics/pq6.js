// here we have only basic knowledge we dont know about loop 
// so we will typecast each number to string len compare

//original form
let num1 = 32;
let num2 = 47852;

// console.log(typeof(num1));
// console.log(typeof(num2));


// //typecast
// let num11 = (String)(num1);
// let num22 = (String)(num2);

// console.log(typeof(num11));
// console.log(typeof(num22));

// //check
// if(num22[num22.length - 1] === num11[num11.length -1]){
//     console.log("Matched");
// }
// else{
//     console.log("Not Matched");
// }

if((num1 % 10 ) == (num2 % 10 )){
    console.log("Numbers have Same last digit which is ", num1 % 10);
}
else{
    console.log("Not same last digit");
}


