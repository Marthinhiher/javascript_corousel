let index=0;// declaration of var to hold the images displaying current
displayImages();// definig the method
function displayImages(){
    // method declaration
    let i;
    const images=document.getElementsByClassName("image");
    for (i=0;i<images.length;i++){
        images[i].style.display="none";
    }
   index++;
   if(index>images.length){
    index=1;
   }
   images[index-1].style.display="block";
   setTimeout(displayImages,3000);
}