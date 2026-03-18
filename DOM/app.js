let smallImages = document.getElementsByClassName("oldImg");
for(let i=0; i<smallImages.length; i++){
    smallImages[i].src = "./spiderman_img.png";
    console.log(`value change for ${i} is changed`);
}    