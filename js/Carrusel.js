let indice = 0;
let imagenes = ["img/angel.jpg","img/coffe.webp","img/dino.jpg","img/koalakawaii.jpg","img/vaca.jpg"];

document.getElementById("siguiente").addEventListener("click", ()=>{
    if (indice<5){
        indice++;
    }
    document.getElementById("img").setAttribute("src",imagenes[indice]);
})

document.getElementById("anterior").addEventListener("click", ()=>{
    if (indice>-1){
        indice--;
    }
    document.getElementById("img").setAttribute("src",imagenes[indice]);
})