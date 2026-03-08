    string slice

let str = "ayushkumarprince";
let a = str.slice(1,5);  //this gives us value from start to end-1;
let b = str.slice(3);    //here we get the value from the given index to last of the string
let c = str.slice(-3);   //ye str.length - num jo aayega wha se last tk string dega 
console.log(c);
console.log(b);
console.log(a);

  string replace
let str = "ayushkumarprince";
console.log(str.length);   // this will give the length of the string 
// newStr = str.replace("ayush","prince");
// console.log(newStr);

console.log(str.replace("ayush","prince").replace("prince","ayush").replace("kumar","raj"));

console.log(str.repeat(4));   //string will be repeated to given number


+++++++++++++++practice question++++++++++++++++++++++++++
---------------------------------------------------
let msg = "  help!  ";
let final = msg.trim().toUpperCase();
console.log(final);

     ------------------------------------------------
let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));

let first = name.slice(0,4);
let last = name.slice(4);
let final = first + " " + last;

console.log(final.replace("l","t").replace("l","t"));
-------------------------------------------------------
