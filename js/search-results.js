
let apiKey = "ba0b591fbb4dcbf21e7a279fceca5d5e"

//VALIDANDO FORMULARIO 


function formValidation(form,input){
    form.addEventListener("submit",function(e){
        e.preventDefault()
        if (input.value.length<4 && input.value.length>0){ 
        } else if (input.value.length === 0 || input.value.length === undefined ){
            document.querySelector(".error").innerText =  "Tu buscador no tiene ningun caracter";
        }else{
            this.submit()
        }
    })
}

 window.addEventListener('load',function(){
let input = document.querySelector(".input")
let form = document.querySelector(".formulario")

    form.addEventListener("click",function(evento){
        formValidation(form,input);
    });
        
    form.addEventListener("keydown",function(evento){
        formValidation(form,input);
    });
    
   input.addEventListener("click",function(evento){
        document.querySelector(".error").innerText =  " ";
    })
let container = document.querySelector(".BusquedaPeliculas")
let movies = ' '
let movie =location.search
console.log(location)
let objMovie = new URLSearchParams(movie)
let keyword = objMovie.get('name')
let series = ' '
let container2 = document.querySelector(".BusquedaSeries")

fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${keyword}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    if (data.results [i]< 0)
    
    <h2 class= "no results"> No se encontraron resultados</h2>

    for (i=0; i< 5;i++){
        if (data.results[i].media_type === 'movie'){
        movies += `<section class="caja1">
        <a href="./detail-movie.html">
         <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
         <h2 class="tituloresultados"> ${data.results[i].title} </h2>
        </a> 
    </section>` 
} else {
    series += `<section class="serie">
     <a href= "./detail-serie.html">
    <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].original_name}' />
    <h2 class="tituloresultados"> ${data.results[i].original_name} </h2>
     </a>
    </section>`
    console.log(data)

}}
    container.innerHTML = movies
    container2.innerHTML = series
})


.then(function(error){
    console.log(error)
})
})
