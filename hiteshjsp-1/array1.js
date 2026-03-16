// const marvel = ["thor","hulk","ironman","spiderman"];

// const dc = ["superman","bathman","flash"];

// marvel.push(dc);

// console.log(marvel);
// console.log(marvel.length); 
// console.log(marvel[4].length);
// console.log(marvel[4][1].length);

// const newA = marvel.concat(dc);
// console.log(newA);
// const newB = dc.concat(marvel);
// console.log(newB);

// const new3 = [...marvel, ...dc];
// console.log(new3);           ////this is spread operator ye same concat ka kaam krta hai 


const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const newano = another.flat(Infinity);

console.log(newano);