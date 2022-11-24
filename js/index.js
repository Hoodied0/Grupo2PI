'let ApiKey = 282ba42024158eda7c391efcdc7bbf53'

window.addEventListener('load', function(){

let boton1 = document.querySelector('.PeliculasMasPopulares')
localStorage.removeItem('estadoboton1');
localStorage.removeItem('estadoboton2');
localStorage.removeItem('estadoboton3');
let estadoboton1 = localStorage.getItem('estadoboton1')

if(estadoboton1 === null || estadoboton1 === undefined){
        localStorage.setItem('estadoboton1', 'cerrado')
        boton1.innerText='Clickea para ver las peliculas mas populares'}
else {
        if(estadoboton1 === 'abierto'){
            boton1.innerText = 'Cierra la vista de las peliculas mas populares'}
        else {
            boton1.innerText = 'Clickea para ver las peliculas mas populares'
        }
    }
    
function AbrirCerrarPeliculas(estadoboton1, evento){
        if(estadoboton1 === 'cerrado'){
             evento.target.innerText = 'Cierra la vista de las peliculas mas populares'
             localStorage.setItem('estadoboton1', 'abierto')
             let lista = document.querySelector('#peliculasmaspopulares')
             let peliculaspop = []

             fetch('https://api.themoviedb.org/3/movie/popular?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US&page=1') 
             .then(function(response) {
             return response.json()
             })
             .then(function(data) {
             console.log(data);
             for (let i = 0; i < data.results.length; i++){
             peliculaspop += 

              `<article class="item">
               <div>
                <a href="./detail-movie.html?id=${data.results[i].id}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" class="imagen" alt='${data.results[i].title}'>
                </a>
               </div>
               <h3><a class = "nombres" href="./detail-movie.html?id=${data.results[i].id}">${data.results[i].title}</a></h3>
               </article>`
             }
             lista.innerHTML = peliculaspop
             })
             .catch(function(error) {
             console.log("Error: " + error);
             }
             )
             }

        else {
                 evento.target.innerText = 'Clickea para ver las peliculas mas populares'
                 localStorage.setItem('estadoboton1', 'cerrado')
                 let peliculaspop = null
                 let lista = document.querySelector('#peliculasmaspopulares')
                 lista.innerHTML = peliculaspop

            }
}

boton1.addEventListener('click', function (evento){
        let storage = localStorage.getItem('estadoboton1')
        AbrirCerrarPeliculas(storage, evento)
    })




    
let boton2 = document.querySelector('.SeriesMasPopulares')
let estadoboton2 = localStorage.getItem('estadoboton2')

if(estadoboton2 === null || estadoboton2 === undefined){
        localStorage.setItem('estadoboton2', 'cerrado')
        boton2.innerText='Clickea para ver las series mas populares'}
else {
        if(estadoboton2 === 'abierto'){
            boton2.innerText = 'Cierra la vista de las series mas populares'}
        else {
            boton2.innerText = 'Clickea para ver las series mas populares'
        }
    }
    
function AbrirCerrarSeries(estadoboton2, evento){
        if(estadoboton2 === 'cerrado'){
             evento.target.innerText = 'Cierra la vista de las series mas populares'
             localStorage.setItem('estadoboton2', 'abierto')
             let lista = document.querySelector('#seriesmaspopulares')
             let seriespop = ""

             fetch('https://api.themoviedb.org/3/tv/popular?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US&page=1') 
             .then(function(response) {
             return response.json()
             })
             .then(function(data) {
                console.log('Este es el fetch')
             console.log(data);
             for (let i = 0; i < data.results.length; i++){
             seriespop += 

              `<article class="item">
               <div>
                <a href="./detail-serie.html?id=${data.results[i].id}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" class="imagen" alt='${data.results[i].original_name}'>
                </a>
               </div>
               <h3><a class = "nombres" href="./detail-serie.html?id=${data.results[i].id}">${data.results[i].original_name}</a></h3>
               </article>`
             }
             lista.innerHTML = seriespop
             })
             .catch(function(error) {
             console.log("Error: " + error);
             }
             )
             }

        else {
                 evento.target.innerText = 'Clickea para ver las series mas populares'
                 localStorage.setItem('estadoboton2', 'cerrado')
                 let seriespop = null
                 let lista = document.querySelector('#seriesmaspopulares')
                 lista.innerHTML = seriespop

            }
}

boton2.addEventListener('click', function (evento){
        let storage = localStorage.getItem('estadoboton2')
        AbrirCerrarSeries(storage, evento)
    })





let boton3 = document.querySelector('.PeliculasPremiadas')
let estadoboton3 = localStorage.getItem('estadoboton3')
    
if(estadoboton3 === null || estadoboton3 === undefined){
        localStorage.setItem('estadoboton3', 'cerrado')
        boton3.innerText='Clickea para ver las peliculas mas premiadas'}
else {
        if(estadoboton3 === 'abierto'){
            boton3.innerText = 'Cierra la vista de las peliculas mas premiadas'}
        else {
            boton3.innerText = 'Clickea para ver las peliculas mas premiadas'
        }
    }
        
function AbrirCerrarPremiadas(estadoboton3, evento){
        if(estadoboton3 === 'cerrado'){
            evento.target.innerText = 'Cierra la vista de las peliculas mas premiadas'
            localStorage.setItem('estadoboton3', 'abierto')
            let lista = document.querySelector('#peliculaspremiadas')
            let peliculaspremiadas = ""
    
            fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US&page=1') 
            .then(function(response) {
            return response.json()
            })
            .then(function(data) {
            console.log(data);
            for (let i = 0; i < data.results.length; i++){
            peliculaspremiadas += 
    
             `<article class="item">
                <div>
                <a href="./detail-movie.html?id=${data.results[i].id}">
                    <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" class="imagen" alt='${data.results[i].title}'>
                </a>
                </div>
                <h3><a class = "nombres" href="./detail-pelis.html?id=${data.results[i].id}">${data.results[i].title}</a></h3>
              </article>`
            }
            lista.innerHTML = peliculaspremiadas
            })
            .catch(function(error) {
            console.log("Error: " + error);
            }
            )
            }
    
        else {
                evento.target.innerText = 'Clickea para ver las peliculas mas premiadas'
                localStorage.setItem('estadoboton3', 'cerrado')
                let peliculaspremiadas = null
                let lista = document.querySelector('#peliculaspremiadas')
                lista.innerHTML = peliculaspremiadas
    
            }
}
    
boton3.addEventListener('click', function (evento){
        let storage = localStorage.getItem('estadoboton3')
        AbrirCerrarPremiadas(storage, evento)
    })


})




<<<<<<< HEAD





let boton5 = document.querySelector('.GenerosSeries')
let estadoboton5 = localStorage.getItem('estadoboton5')
    
if(estadoboton5 === null || estadoboton5 === undefined){
        localStorage.setItem('estadoboton5', 'cerrado')
        boton5.innerText='Clickea para ver los generos de series'}
else {
        if(estadoboton5 === 'abierto'){
            boton5.innerText = 'Cierra la vista de los generos de series'}
        else {
            boton5.innerText = 'Clickea para ver los generos de series'
        }
    }
        
    // generos 

function AbrirCerrarGenerosSeries(estadoboton5, evento){
        if(estadoboton5 === 'cerrado'){
            evento.target.innerText = 'Cierra la vista de los generos de series'
            localStorage.setItem('estadoboton5', 'abierto')
            let lista = document.querySelector('#generosseries')
            let GenerosSeries = ""
    
            fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US') 
            .then(function(response) {
            return response.json()
            })
            .then(function(data) {
            console.log(data);
            for (let i = 0; i<data.results.length; i++){
           GenerosSeries += 
    
             `<article class="item">
                <div>
                <a href="./detail-genres.html?id=${data.results[i].id}">
                <h3> ${data.results[i].name} </h3> </a>
               
            
              </article>`
            }
            lista.innerHTML = GenerosSeries
            })
            .catch(function(error) {
            console.log("Error: " + error);
            }
            )
            }
    
        else {
                evento.target.innerText = 'Clickea para ver los generos de series'
                localStorage.setItem('estadoboton5', 'cerrado')
                let GenerosSeries = null
                let lista = document.querySelector('#generosseries')
                lista.innerHTML = GenerosSeries
    
            }
}
    
boton5.addEventListener('click', function (evento){
        let storage = localStorage.getItem('estadoboton5')
        AbrirCerrarGenerosSeries(storage, evento)
    })



=======
>>>>>>> 7fea4d8d89739fa99014697914ae0825184a8022
