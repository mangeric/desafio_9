
const conatiner=document.querySelector('.container');
const btn_disminuir=document.querySelector('.btn-danger');
const nombre=document.getElementById('nombre');
const precio=document.getElementById('precio');
const span= document.getElementById('span');
let contador=0;
//detecta un evento y le agrego un if para saber si es el de aumentar o disminuir
conatiner.addEventListener('click',(e)=>{
    //boton de aumentar
    if(e.target.classList.contains('btn-info')){
        contador++;
        span.textContent=contador;

    }
    //boton de disminuir
    if(e.target.classList.contains('btn-danger')){
        contador--;
        span.textContent=contador;

    }
})

nombre.addEventListener('keyup',(e)=>{
   const nuevo=document.getElementById("card_titulo");
   nuevo.innerText=nombre.value;
})
precio.addEventListener('keyup',(e)=>{
    const precio_card=document.getElementById("card_precio");
    precio_card.innerText=precio.value;
})