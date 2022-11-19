let query = location.search
let queryObj = new URLSearchParams(query)
let id = queryObj.get("id")
let apikey = "?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US"

let url = "https://api.themoviedb.org/3/movie/" + id + apikey
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
let duracion = document.querySelector(".duracion")
let estreno = document.querySelector(".Estreno")
let lugarimagen = document.querySelector(".lugarimagen")
let generos = document.querySelector('#generos')

   


for (let i = 0; i < data.genres.length; i++){
    Listageneros += 
        
       `<a  href="./detail-genres.html?id=${data.genres[i].id}"> ${data.genres[i].name} </a>`
     
    }

generos.innerHTML = Listageneros

titulo.innerText = data.original_title;
sinopsis.innerText += data.overview;
duracion.innerHTML += 'Duracion: ' + data.runtime + ' minutos';
estreno.innerText = 'Fecha de estreno: ' + data.release_date

imagen = `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}" class="imagenpelicula" alt=${data.original_title}>`

lugarimagen.innerHTML = imagen
})
.catch(function(error) {
    console.log("Error: " + error);
})

let url2 = "https://api.themoviedb.org/3/movie/" + id + "/watch/providers?api_key=282ba42024158eda7c391efcdc7bbf53"
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
