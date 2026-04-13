let str = "AyuSHI";
vowelCount(str);

function vowelCount(str){
    let count = 0;
    // for(let i=0; i<str.length; i++){
    //     if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
    //         count++;
    //     }
    // }

    let vol = "aeiouAEIOU";

    for(let char of str){
        if(vol.includes(char)){
            count++;
        }
    }

    
    console.log(count);
}