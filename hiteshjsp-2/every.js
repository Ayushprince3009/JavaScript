  // EVERY            aagr ek bhi false aaya to value false hoga for true every should be true 

  console.log([2,4,6,76].every((el) => (el%2==0)));

  console.log([2,4,61,76].every((el) => (el%2==0)));

  // SOME           agr ek true then true return krega    agr sb false tn false return krega

  console.log([21,41,61,761].some((el) => (el%2==0)));

  console.log([21,41,61,76].some((el) => (el%2==0)));


  //REDUCE    

  console.log([1,2,3,4,5].reduce((res,el) => (res+el)));

  let num = [1,2,3,4,5,6,7,8,9,10];
  let result = num.reduce((res, el) => (res + el));
  console.log(result);