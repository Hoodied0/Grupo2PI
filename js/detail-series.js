let query = location.search
let queryObj = new URLSearchParams(query)
let id = queryObj.get("id")
let apikey = "?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US"

let url = "https://api.themoviedb.org/3/tv/" + id + apikey
console.log(url)

fetch(url)
.then(function(response){
return response.json()
}
)
.then(function(data){
console.log(data)
let Listageneros=""
let titulo = document.querySelector(".titulo")
let sinopsis = document.querySelector(".sinopsis")
let estreno = document.querySelector(".Estreno")
let lugarimagen = document.querySelector(".lugarimagen")
let generos = document.querySelector('#generos')

for (let i = 0; i < data.genres.length; i++){
    Listageneros += 
        
       `<a  href="./detail-genres-series.html?id=${data.genres[i].id}"> ${data.genres[i].name} </a>`
     
    }

generos.innerHTML = Listageneros

titulo.innerText = data.original_name;
sinopsis.innerText += data.overview;
estreno.innerText = 'Fecha de estreno: ' + data.air_date

imagen = `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}" class="imagenpelicula" alt=${data.original_name}>`

lugarimagen.innerHTML = imagen
})
.catch(function(error) {
    console.log("Error: " + error);
})

let url2 = "https://api.themoviedb.org/3/tv/" + id + "/watch/providers?api_key=282ba42024158eda7c391efcdc7bbf53"
console.log(url2)

fetch(url2)
.then(function(response){
return response.json()
}
)
.then(function(data){
console.log(data)

let Listasitios = document.querySelector(".Sitios")
let links=[]

for (let i = 0; i < data.results.US.buy.length; i++){
    links += 

     `<article class="item">
      <div>
           <img src="https://image.tmdb.org/t/p/w500${data.results.US.buy[i].logo_path}" class="imagen" alt='${data.results.US.buy[i].provider_name}'>
      </div>
      <h3 class = "nombres">${data.results.US.buy[i].provider_name}</h3>
      </article>`
    }
    Listasitios.innerHTML = links
}
)
.catch(function(error) {
    console.log("Error: " + error);
})




let container = document.querySelector('.button1')

fetch(url)
.then(function(response){
return response.json()
}
)
.then(function(data){

let favoritos = getStorage() 
let estaMiProducto = favoritos.includes(data.id) 

let textoInicial = ' '
if(estaMiProducto){
    textoInicial = 'Sacar de favoritos'
} else {
    textoInicial = 'Agregar a Favoritos'
}
container.innerHTML = `<button class='favoritos'>${textoInicial}</button>`

let btnFavs = document.querySelector('.favoritos')

btnFavs.addEventListener('click', function(e){
    console.log(e)        
    let favoritos = getStorage()
    let estaMiProducto = favoritos.includes(data.id)

    if(estaMiProducto){
        removeFavorite(data.id, favoritos)
        e.target.innerText='Agregar a Favoritos'
    } else {
        addFavorite(data.id, favoritos)
        e.target.innerText='Sacar de Favoritos'
    }

}) 

})

function getStorage(){
    let storage = localStorage.getItem('favoritos')
    if(storage !== null && storage !== undefined){
        return JSON.parse(storage)
    } else {
        return []
    }
}

function addFavorite(id, storage){
    storage.push(id)
    let storageToString = JSON.stringify(storage)
    localStorage.setItem('favoritos', storageToString)
}

function removeFavorite(id, storage){
    let position = storage.indexOf(id)
    storage.splice(position, 1)
    let storageToString = JSON.stringify(storage)
    localStorage.setItem('favoritos', storageToString)
}



let url3 = "https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US&page=1"
console.log(url3)

let boton = document.querySelector('.sugerenciasFlix')
localStorage.removeItem('estadorecomendaciones');
let estadorecomendaciones = localStorage.getItem('estadorecomendaciones')
    
    if(estadorecomendaciones === null || estadorecomendaciones === undefined){
            localStorage.setItem('estadorecomendaciones', 'cerrado')
            boton.innerText='Ver recomendaciones'}
    else {
            if(estadorecomendaciones === 'abierto'){
                boton.innerText = 'Ocultar recomendaciones'}
            else {
                boton.innerText = 'Ver recomendaciones'
            }
        }
        
    function AbrirCerrarRecomendaciones(estadorecomendaciones, evento){
            if(estadorecomendaciones === 'cerrado'){
                 evento.target.innerText = 'Ocultar recomendaciones'
                 localStorage.setItem('estadorecomendaciones', 'abierto')
                 let lista = document.querySelector('.Sugerencias1')
                 let ListaRecomendaciones = []
    
                 fetch(url3) 
                 .then(function(response) {
                 return response.json()
                 })
                 .then(function(data) {
                 console.log(data);
                 for (let i = 0; i < 12 ; i++){
                  ListaRecomendaciones += 
    
                  `<article class="sugerencias">
                    <a href="./detail-serie.html?id=${data.results[i].id}">
                        <img class="cartelera" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" class="imagen" alt='${data.results[i].title}'>
                    </a>
                   </article>`
                 }
                 lista.innerHTML = ListaRecomendaciones
                 })
                 .catch(function(error) {
                 console.log("Error: " + error);
                 }
                 )
                 }
    
            else {
                     evento.target.innerText = 'Ver recomendaciones'
                     localStorage.setItem('estadorecomendaciones', 'cerrado')
                     let ListaRecomendaciones = []
                     let lista = document.querySelector('.Sugerencias1')
                     lista.innerHTML = ListaRecomendaciones
    
                }
    }
    
    boton.addEventListener('click', function (evento){
            let storage = localStorage.getItem('estadorecomendaciones')
            AbrirCerrarRecomendaciones(storage, evento)
        })
    

let url4 = "https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US"
console.log(url4)
        
fetch(url4)
.then(function(response){
return response.json()
}
)
.then(function(data){
console.log(data)
        
let trailer = document.querySelector(".trailer")
let info=[]

if (data.results == false){
    info = `<h3 class = "favoritoygeneros">no hay trailers disponibles</h3>`
    trailer.innerHTML = info
}else{
      for (let i = 0; i < 1; i++){
           info += 
               `
                <iframe class="Video"  src="https://www.youtube.com/embed/${data.results[i].key}?controls=0&amp;start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               `
         }
            trailer.innerHTML = info
       }
}
)
.catch(function(error) {
    console.log("Error: " + error);
})


let url5 = "https://api.themoviedb.org/3/tv/" + id + "/reviews?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US&page=1"
console.log(url5)
        
fetch(url5)
.then(function(response){
return response.json()
}
)
.then(function(data){
console.log(data)
        
let reviews = document.querySelector(".reviews")
let informacion=[]
let fecha=""


if (data.results == false){
    informacion = `<h3 class ="trailer" class = "favoritoygeneros">no hay reseñas disponibles</h3>`
    reviews.innerHTML = informacion
}else{
       for (let i = 0; i < data.results.length; i++){
            fecha = ""
            for(let n = 0; n < 10; n++){
            fecha += data.results[i].created_at[n]
            }

            informacion += 

            ` <div>
              <h2 class = "usuario">${data.results[i].author}</h2>
              <h2 class = "fecha">${fecha}</h2>
              </div>
              <h3 class = "contenido">${data.results[i].content}</h3>
            `
       }
    }
reviews.innerHTML = informacion  
}
)
.catch(function(error) {
    console.log("Error: " + error);
})
    
