let i=1;

while(i<=20){
    console.log(`index ${i}`);
    i++;
}

while(i<=20){
    if(i==10){
        break;
    }
    console.log(`index ${i}`);
    i++;
}

while(i<=20){
    if(i==10){
        i++
        continue;
    }
    console.log(`index ${i}`);
    i++;
}


do{
    console.log(i);
    i++;
}while(i<=20);
    