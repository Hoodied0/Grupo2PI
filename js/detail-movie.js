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

let titulo = document.querySelector(".titulo")
let sinopsis = document.querySelector(".sinopsis")
let duracion = document.querySelector(".duracion")
let estreno = document.querySelector(".Estreno")
let presentacion = document.querySelector(".presentacion")

titulo.innerText = data.original_title;
sinopsis.innerText += data.overview;
duracion.innerHTML += 'Duracion: ' + data.runtime + ' minutos';
estreno.innerText = 'Fecha de estreno: ' + data.release_date

imagen = '<img src="https://image.tmdb.org/t/p/w500${data.poster_path}" class="imagen" alt=${data.original_title}>'

presentacion.innerHTML = imagen
}
)
.catch(function(error) {
    console.log("Error: " + error);
})