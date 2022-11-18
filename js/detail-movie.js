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
let generos = document.querySelector('#generos')

for (let i = 0; i < data.genres.length; i++){
    Listageneros += 
        
       '<a href="./detail-genres.html?id=${data.genres[i].id}">${data.genres[i].name}</a>'
     
    }

generos.innerHTML = Listageneros

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




let url2 = "ttps://api.themoviedb.org/3/movie/" + id + "watch/providers?api_key=282ba42024158eda7c391efcdc7bbf53"
console.log(url2)

fetch(url2)
.then(function(response){
return response.json()
}
)
.then(function(data){
console.log(data)

let Listasitios = document.querySelector(".Sitios")

for (let i = 0; i < data.results.ES.buy.length; i++){
    links += 

     `<article class="item">
       <h3>${data.results.ES.link}</h3>
      <div>
           <img src="https://image.tmdb.org/t/p/w500${data.results.ES.buy[i].logo_path}" class="imagen" alt='${data.results.ES.buy[i].provider_name}'>
      </div>
      <h3>${data.results.ES.buy[i].provider_name}</h3>
      </article>`
    }
    Listasitios.innerHTML = links
}
)
.catch(function(error) {
    console.log("Error: " + error);
})