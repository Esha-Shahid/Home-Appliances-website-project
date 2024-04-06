let image = document.querySelector("#slidder");
let imagesource = ["Media/images/slider1.jpg", "Media/images/slider2.jpg", "Media/images/slider3.jpg","Media/images/slider4.jpg"];
let imageslidder = 0;
function img(){
imageslidder++;
if(imageslidder>=imagesource.length){
    imageslidder = 0;
}
image.src=imagesource[imageslidder]
console.log(image.src)
}
setInterval(()=>{
    img()
},4000)
