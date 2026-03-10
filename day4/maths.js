console.log(Math.floor(Math.random()*25)+1);

// ye random number generate krega

//guessing game

let max = Number(prompt("Enter number"));
console.log(Math.floor(Math.random()*max)+1);

//================question1==========================
let num = Math.floor(Math.random()*6)+1;
console.log(num);

//===========question2=======================
const car ={
    name:"TATA",
    model: "PUNCH",
    color: "Magnite",
    year: 2023,
    age: 3
};

console.log(car);
console.log(car.name);

//============question3=========================
const person ={
    name: "john",
    age: 34,
    city: "Noida"
};
console.log(person);

person.city = "New York";
console.log(person);

person.country = "United State";
console.log(person);
