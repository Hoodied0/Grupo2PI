let favnumberserie = document.querySelector('.favoritelistserie')
let favnumbermovie = document.querySelector('.favoritelistmovie')
let containerserie = document.querySelector('.favorite-series')
let containermovie = document.querySelector('.favorite-movie')
let idmovie = localStorage.getItem('favoritomovie')
let idserie = localStorage.getItem('favoritoserie')


window.addEventListener('load', function(){

let favsser = getFavsStorage()
    
    if(favsser.length == 0){
        favnumberserie.innerHTML = `
        <section>
            <h2>No tienes series favoritas</h2>
        </section>
        `
    } else if(favsser.length == 1) {
        favnumberserie.innerHTML += `
        <h2>
            Tienes ${favs.length} serie favorita
        </h2>
        ` 
    } else {
        favnumberserie.innerHTML += `
        <h2>
            Tienes ${favs.length} series favoritas
        </h2>
        ` 
        getAllFavsAndPrint(favs)
    }
})

window.addEventListener('load', function(){

    let favmov = getFavsStorage()
        
        if(favmov.length == 0){
            favnumbermovie.innerHTML = `
            <section>
                <h2>No tienes peliculas favoritas</h2>
            </section>
            `
        } else if(favs.length == 1) {
            favnumbermovie.innerHTML += `
            <h2>
                Tienes ${favs.length} pelicula favorita
            </h2>
            ` 
        } else {
            favnumbermovie.innerHTML += `
            <h2>
                Tienes ${favs.length} peliculas favoritas
            </h2>
            ` 
            getAllFavsAndPrint(favs)
        }
    })

function getFavsStorage1(){
    let storage = localStorage.getItem('favoritoserie')

    if(storage !== null && storage !== undefined){
        return JSON.parse(storage)
    } else {
        return []
    }
}


function getAllFavsAndPrint1 (arrFavs1){
    for(let i=0 ; i< arrFavs1.length ; i++){
        fetch(`https://api.themoviedb.org/3/tv/${arrFavs1[i]}?api_key=c71f5b75c8e3c6372967558c16ff597f`)
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){ 
            
            console.log(data)
            containerserie.innerHTML += `
            <li>
                <article>
                    <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}'
                    <a href='./detail-movie.html?id=${data.id}'>
                    <p>${data.title}</p>
                    </a>
                </article>
            </li>
            `
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

function getFavsStorage2(){
    let storage = localStorage.getItem('favoritomovie')

    if(storage !== null && storage !== undefined){
        return JSON.parse(storage)
    } else {
        return []
    }
}


function getAllFavsAndPrint2 (arrFavs2){
    for(let i=0 ; i< arrFavs2.length ; i++){
        fetch(`https://api.themoviedb.org/3/movie/${arrFavs2[i]}?api_key=c71f5b75c8e3c6372967558c16ff597f`)
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){ 
            
            console.log(data)
            containermovie.innerHTML += `
            <li>
                <article>
                    <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}'
                    <a href='./detail-movie.html?id=${data.id}'>
                    <p>${data.title}</p>
                    </a>
                </article>
            </li>
            `
        })
        .catch(function(error){
            console.log(error)
        })
    }
}





