let apiKey = "399cd9827f714613d04693cee425808c"
//VALIDANDO FORMULARIO 

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

})

function formValidation(form,input){
    form.addEventListener("submit",function(e){
        e.preventDefault()
        if (input.value.length<3 && input.value.length>0){
            alert("Por favor, escribe mas de 3 caracteres")
        } else if (input.value.length === 0 || input.value.length === undefined ){
            alert("Todavia no aprendi a leer mentes, por favor escribe algun caracter ")
        }else{
            this.submit()
        }
    })
}

//window.addEventListener('load',function(){ --> YA LO TENGO arriba no hace falta 

let container = document.querySelector(".busqueda")
let tituloBusqueda=document.querySelector(".titulobusqueda")
let movie =location.search
let movies = " "
console.log(location)
let objMovie = new URLSearchParams(movie)
let keyword = objMovie.get('name')
let series = ' '
let container2 = document.querySelector(".section_ser")

tituloBusqueda.innerText=`Tu resultado de busqueda es : ${keyword}`
// loading
    window.onload=function(){
    alert ("he cargado completamente tu pagina")
    $("#onload").fadeOut();
// removemos la propiedad que evita scrollear una vez que me cargo
    $("body").removeClass("hidden");    
      } 
 fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${keyword}`)
    .then(function(resp){
    return resp.json()
})
.then(function(data){
    for (i=0; i< 5;i++){
        if (data.results[i].media_type == 'movie'){
        console.log(data)
        console.log("ENTRO",data.results[i].media_type, data.results[i].media_type=="movie")
        movies += 
        `<article class="articulo">
           <a href="./detail-movie.html?id=${data.results[i].id}">
            <img class="imagen" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].title}' />
            </a>
            <p class="titulocategorias"> ${data.results[i].title} </p>
         
        </article>`

        container.innerHTML = movies
        
}   else {
    console.log("ENTRO SERIE")
    series += `<article class="articulo">
    <a href= "./detail-serie.html?id=${data.results[i].id}">
    <img class="imagen class" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt='${data.results[i].name}' />
    </a>
    <p class="titulocategorias"> ${data.results[i].name} </p>
    </article>`

    container.innerHTML = series


}}
})


.catch(function(error){
    console.log(error)
})
