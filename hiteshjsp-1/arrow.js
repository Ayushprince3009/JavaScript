const sum = (a,b) => {
    console.log(a+b);
};

sum(4,5);
sum(40,89);

const power = (a,b) => {
    console.log(a**b);
};

power(2,3);

const cub = n => {             //agar ek hi argument ho to bina bracket ke hi kaam ho jayega 
    console.log(n*n*n);
};
cub(2);


const mul = (a,b) => (
    a*b
);

console.log(mul(4,5));

//////implicit function    single line me return dega  arrow function is used o write small function 
const cube = (n) => (n*n*n);
console.log(cube(3));


