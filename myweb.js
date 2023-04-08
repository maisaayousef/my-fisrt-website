const imgs =document.querySelector(".image");
const botton=document.querySelectorAll(".botton img ");


botton.forEach((img) => {
    img.addEventListener("click",()=>{

imgs.src=img.src;


    })
});