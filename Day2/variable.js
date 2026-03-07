let name="ayush";
console.log(name);
let c = "strike is coming soon";
console.log(c);

let a = 15;
let b =25;

console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a>=b);
console.log(a<=b);

let z = "15";
let v = Number(z);
let m = 15;
console.log(z==m);
console.log(z===m);          // ==== it checks for both value and datatype
console.log(v==m);
console.log(v===m);

let age = 23;
age + 2;
console.log(age);   //here age did not got incremented because age is increasing but it is not updating.

let hindi = 80;
let maths = 90;
let eng = 100;
let avg = (hindi+eng+maths) / 3;
console.log(avg);

let num = 5;
let newNum = num++;
newNUm = ++num;
console.log(num);
console.log(newNum)

let name = "Ayush kumar"
console.log(name.length);
console.log(name[0]);
console.log(name[(name.length)-1]);
console.log("apnacollege" + 123);   //JavaScript me + operator string ke saath use hone par concatenation (jodna) karta hai.

let n ="";
console.log(n.length);       // length is 0
let b = " ";
console.log(b.length);       // length is 1

//traffic light system for what to do on specific color

let color = prompt("Enter color");
if(color === "red"){
    console.log("stop");
}
if (color === "yellow"){
    console.log("Wait");
}
if (color === "green"){
    console.log("go");
}

//            popcorn price calculator

let size = prompt("Enter size");
if(size === "XL"){
    console.log("Price is Rs.250");
}
else if(size === "L"){
    console.log("Price is Rs.200");
}
else if(size === "M"){
    console.log("Price is Rs.100");
}
else if(size === "S"){
    console.log("Price is Rs.50");
}
else{
    console.log("Enter correct size");
}

//question  print good string if string starts with letter  "a" and has length >3

let str = prompt("Enter String");
if(str[0] === "a" && str.length >3){
    console.log("good string");
}
else{
    console.log("Not a good string");
}

//    predict

let num = 12;
if((num%3 === 0) && ((num+1 ==15) || (num-1 == 11))){
    console.log("safe");
} else{
    console.log("unsafe");             //here the output will be safe as there is a condition check in which first is always true and from second part lasty is true and in second there is or operator
}

//       switch case for days 

let value = parseInt(prompt("Enter number"));
switch(value){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter valid number")                           
}


//          question 1

let num = parseInt(prompt("Enter number"));
if(num % 10 == 0){
    console.log("good");
}
else{
    console.log("bad");
}

//    question 2

let name = prompt("Enter name");
let age = parseInt(prompt("Enter age"));
alert(`${name} is ${age} years old`);

//      question 3

let quarter = parseInt(prompt("Enter number"));
switch(quarter){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Enter valid Quarter");             
}

//         question 4

let str = prompt("Enter string");
if(str[0] === ("A" || "a") && str.length > 5){
    console.log("Golden");
}
else{
    console.log("Not");
}

