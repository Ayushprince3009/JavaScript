let num = [1,,2,3,4,5,6,7,8];

let newNum = num
                .map((num) => num*10)
                .map((num) => num + 1)
                .filter((num) =>{ return num > 40});                
console.log(newNum);