const mySym = Symbol("key1");
const jsUser = {
    name:"Ayush",
    age: 23,
    loation: "Noida",
    [mySym]: "myKey1",           //way to include symbol in object
    email: "ayush@gmail.com",
    company:"Faltu.com"
};

// console.log(jsUser.name);
// console.log(jsUser["email"]);

// console.log(jsUser[mySym]);  //wat to print symbol from object

// const obj1={1:"A",2:"B",3:"C",4:"D"};
// const obj2={5:"E",6:"F",7:"G",8:"H"};

//const obj3={obj1 , obj2};
//const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1, ...obj2};   //sprad operator se sb ko ek sth lane 
// console.log(obj3);

