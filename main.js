


  

principal=document.querySelector('.principal') 
quetanto=document.querySelector('.quetanto')
personajes=document.querySelector('.personajes')
personaje=document.querySelector('.personaje')
episodios=document.querySelector('.episodios')
episodio=document.querySelector('.episodio')
llamar=document.querySelector('.llamar')



quetanto.addEventListener('click',()=>{
    principal.style.top='11vh'
    personajes.style.top='-10000vh'
    episodios.style.top='-10000vh'
    llamar.style.top='-10000vh'
})


personaje.addEventListener('click',()=>{
    personajes.style.top='11vh'
    episodios.style.top='-10000vh'
    principal.style.top='-10000vh'
    llamar.style.top='10075vh'

})



episodio.addEventListener('click',()=>{
    episodios.style.top='11vh'
    personajes.style.top='-10000vh'
    principal.style.top='-10000vh'
    llamar.style.top='-10000vh'

})




var input = document.querySelector(".nombre");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.querySelector(".correcto").click();
  }
});





let cont=0
let nombre
document.querySelector('.correcto').addEventListener('click',()=>{
    nombre=document.querySelector('.nombre').value
    informacion(api)
})



const api="https://rickandmortyapi.com/api/character/"

const informacion=(apiurl)=>{
    return fetch(apiurl)
    .then(response=>response.json())
    .then(json=>{ datos(json)})
    .catch(error=>{console.error(error)})
}




const datos=(data)=>{
 let html=''
 
 if(data.results[cont].name==nombre){
    cont++
    informacion(api)
 }else{
    html+=`
    <div class"imgperson">
        <h2>Adivina el nombre del personaje</h2>
    </div>
    <div>
        <img class="imgp" src="${data.results[cont].image}">
    </div>
    <audio
      src="./recursos/WhatsApp Audio 2022-11-13 at 5.30.23 PM.mpeg"
      autoplay="true"
      infinite
    ></audio>
    
    `
 document.querySelector('.personajes').innerHTML=html

}
   

 
}

informacion(api)















