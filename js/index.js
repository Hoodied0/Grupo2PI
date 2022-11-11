'let ApiKey = 282ba42024158eda7c391efcdc7bbf53'

window.addEventListener('load', function(){

let boton1 = document.querySelector('.PeliculasMasPopulares')

let estado = localStorage.getItem('estado')

if(estado === null || estado === undefined){
        localStorage.setItem('estado', 'cerrado')
        boton1.innerText='Clickea para ver las peliculas mas populares'}
else {
        if(estado === 'abierto'){
            boton1.innerText = 'Cierra la vista de peliculas mas populares'}
        else {
            boton1.innerText = 'Clickea para ver las peliculas mas populares'
        }
    }
    
function AbrirCerrarPeliculas(estado, evento){
        if(estado === 'cerrado'){
             evento.target.innerText = 'Clickea para ver las peliculas mas populares'
             localStorage.setItem('estado', 'abierto')
             let lista = document.querySelector('.peliculaspopulares')
             let peliculaspop = ""

             fetch('https://api.themoviedb.org/3/movie/popular?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US&page=1') 
             .then(function(response) {
             return response.json()
             })
             .then(function(data) {
             console.log(data);
             for (let i = 0; i < data.results.length; i++){
             peliculaspop += 

              `<article>
               <div>
                <a href="./detail-movie.html">
                    <img src = <img src=${data.results[i].poster_path} class="imagen" alt='${data.results[i].title}'>
                </a>
               </div>
               <h3><a class = "nombres" href="./detail-movie.html">${data.results[i].title}</a></h3>
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
                 evento.target.innerText = 'Cierra la vista de peliculas mas populares'
                 localStorage.setItem('estado', 'cerrado')
                 peliculaspop = []
                 let lista = document.querySelector('.peliculaspopulares')
                 lista.innerHTML = peliculaspop

            }
}

boton1.addEventListener('click', function (evento){
        let storage = localStorage.getItem('estado')
        AbrirCerrarPeliculas(storage, evento)
    })

})

