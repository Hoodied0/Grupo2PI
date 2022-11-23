window.addEventListener('load', function(){

localStorage.removeItem('estadoboton5');
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
        
function AbrirCerrarGenerosSeries(estadoboton5, evento){
        if(estadoboton5 === 'cerrado'){
            evento.target.innerText = 'Cierra la vista de los generos de series'
            localStorage.setItem('estadoboton5', 'abierto')
            let lista = document.querySelector('#generosseries')
            GenerosSeries = []
    
            fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US') 
            .then(function(response) {
            return response.json()
            })
            .then(function(data) {
            console.log(data);
            for (let i = 0; i < data.genres.length; i++){
              GenerosSeries += 
    
                `<article class="item">
                   <div>
                   <a href="./detail-genres-series.html?id=${data.genres[i].id}">
                    <h3> ${data.genres[i].name} </h3> </a>

                </article>`
            }
            lista.innerHTML = GenerosSeries
            })
            .catch(function(error) {
            console.log("Error: " + error);
            }
            )
        }else {
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


localStorage.removeItem('estadoboton6');
let boton6 = document.querySelector('.GenerosMovie')
let estadoboton6 = localStorage.getItem('estadoboton6')
    
if(estadoboton6 === null || estadoboton6 === undefined){
        localStorage.setItem('estadoboton6', 'cerrado')
        boton6.innerText='Clickea para ver los generos de peliculas'}
else {
        if(estadoboton6 === 'abierto'){
            boton6.innerText = 'Cierra la vista de los generos de peliculas'}
        else {
            boton6.innerText = 'Clickea para ver los generos de peliculas'
        }
    }
        
function AbrirCerrarGenerosMovie(estadoboton6, evento){
        if(estadoboton6 === 'cerrado'){
            evento.target.innerText = 'Cierra la vista de los generos de peliculas'
            localStorage.setItem('estadoboton6', 'abierto')
            let lista = document.querySelector('#generosmovie')
            GenerosMovie = []
    
            fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US') 
            .then(function(response) {
            return response.json()
            })
            .then(function(data) {
            console.log(data);
            for (let i = 0; i < data.genres.length; i++){
              GenerosMovie += 
    
                `<article class="item">
                   <div>
                   <a href="./detail-genres-movie.html?id=${data.genres[i].id}">
                    <h3> ${data.genres[i].name} </h3> </a>

                </article>`
            }
            lista.innerHTML = GenerosMovie
            })
            .catch(function(error) {
            console.log("Error: " + error);
            }
            )
        }else {
                evento.target.innerText = 'Clickea para ver los generos de peliculas'
                localStorage.setItem('estadoboton6', 'cerrado')
                let GenerosMovie = null
                let lista = document.querySelector('#generosmovie')
                lista.innerHTML = GenerosMovie
    
            }
}
    
boton6.addEventListener('click', function (evento){
        let storage = localStorage.getItem('estadoboton6')
        AbrirCerrarGenerosMovie(storage, evento)
    })

})
