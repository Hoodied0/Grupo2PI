let query = location.search
let queryObj = new URLSearchParams(query)
let id = queryObj.get("id")

let url = "https://api.themoviedb.org/3/discover/movie?api_key=02e0e755b1f9c129e53aa7c8af3d9868&with_genres=" + id  
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
        
       `<a  href="./detail-genres.html?id=${data.genres[i].id}"> ${data.genres[i].name} </a>`
     
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
