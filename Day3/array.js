// -------------------push and pop && shift and unshift---------------------
// in pop last element of the array got deleted and in push element is added to the last of the array

// similarly in shift we delete elements from the starting of the array and using unshift we add element to the stat of the array
// let start = ['january','july','march','august'];
// start.shift();
// start.shift();
// start.unshift('july','june');

// console.log(start.length);
// console.log(start);
// ----------------------------------------------------------

// let start = ['january','july','march','august'];
// let final = start.splice(0,2,'july','june');     //basically this returns the deleted elements from the array 
// console.log(start);
// console.log(final);
// --------------------------------------------------------------

// let sub = ['c','c++','html','javascript','python','java','c#','sql'];
// console.log(sub.indexOf('javascript'));
// sub.reverse();
// console.log(sub);
// console.log(sub.indexOf('javascript'));

// -------------------------------------------------------------------------

//        nested array

// let arr = [[1,2,3],[4,5],[6,8,3,5],[1,8,54,2,7]];
// console.log(arr);
// // console.log(arr.length);
// // console.log(arr[0]);
// // console.log(arr[0][1]);
// // console.log(arr[0].length);
// console.log(arr[0].splice(1,1,'33','45'));
// console.log(arr);
// console.log(arr.splice(1,1));
// console.log(arr);

// ======================================================

// array to show tic tac toe game

// let arr = [['X','null','O'],['null','X','null'],['O','null','X']];
// arr[0][2]='X';
// console.log(arr);

// -------------practice questions-------------------------

// ------------question1------------------------

// let arr = [1,2,3,4,5,6,7,8,9];
// let n = Number(prompt("Enter number"));
// console.log(arr.slice(0,n));

// ===========question2===================

// let arr = [1,2,3,4,5,6,7,8,9];
// let n = Number(prompt("Enter number"));
// console.log(arr.slice(-n));

// ============question3========================

// let str =' ';
// if(str.length > 0){
//     console.log("not blank")
// }
// else{
//     console.log("Blank");
// }

// ===========questioon4==================
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.includes(51));

// ====================question5=============================

// let str = "ayushGJGVHGVsjhddfhasJHGGisjhsdjkfhsdjhsa";

// console.log(str.length);
// let idx = 2;
// if(str[idx] == str[idx].toLowerCase()){
//     console.log("character is lowercase");
// }
// else{
//     console.log("character is not in lowercase");
// }


// _+_+_+_+_+_++++++++++++++_______________________++++++++++++++++++++++++__________________+

// practice question 1----------------------
// attempt1.......................
// let number = 23456789;
// let count = 0;
// while(number >0){
//     let start = number % 10;
//     count++;
//     number = Math.floor(number / 10);   //direct division krne pe decimal aa jayega usi ko prevent krne ko hum  Math.floor use kr rhe h 
// }
// console.log(count);

// //attempt2.................................
// let digit = number.toString().length;  //here we convert the number imnto string then we counted the number of characters
// console.log(digit);

// ===========question 3=======================
// let number =287167343;
// let sum = 0;
// while(number > 0){
//     let num = number % 10;
//     sum += num;
//     number = Math.floor(number / 10);
// }
// console.log(sum);

// ============question 4=====================\
// let num = 7;
// let fact = 1;
// if(num == 0){
//     console.log(fact);
// }
// else{
//     for(let i = 1; i<=num; i++){
//         fact = fact*i;
//     }
// }
// console.log(fact);

// ==================question 5=======================\
// let a;
// let b;
// let c;
// if(a>=b && a>=c){
//     console.log(a);
// }
// else if(b>=a && b>=c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }

// =========question1=====================

// let arr =[1,2,3,4,5,6,7,2,3];
// let num = 2;
// let res = arr.splice(1,1);
// res = arr.splice(-2,1);
// console.log(arr);     //tis is brute force approach in this we manually delete numbers based on their index


// let arr = [1,2,3,4,5,6,7,2,3];
// let num = 2;
// for(let i =0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//          i==;
//     }
// }
// console.log(arr);
