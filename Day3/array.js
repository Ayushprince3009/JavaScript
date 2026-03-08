//-------------------push and pop && shift and unshift---------------------
//in pop last element of the array got deleted and in push element is added to the last of the array

//similarly in shift we delete elements from the starting of the array and using unshift we add element to the stat of the array
let start = ['january','july','march','august'];
start.shift();
start.shift();
start.unshift('july','june');

console.log(start.length);
console.log(start);