let favnumber = document.querySelector('.favoritelist')
let containerserie = document.querySelector('.favorite-series');
let containermovie = document.querySelector('.favorite-movie')
let id = localStorage.getItem('favoritos')
let apiKey = "?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US"
let url1 ="https://api.themoviedb.org/3/movie/" + id + apiKey
console.log(url1)

window.addEventListener('load', function(){

    let favser = getFavsStorage1()
    
    if(favs.length == 0){
        favnumber.innerHTML = `
        <section>
            <h2>No tienes favoritos</h2>
        </section>
        `
    } else if(favs.length == 1) {
        favnumber.innerHTML += `
        <h2>
            Tienes ${favs.length} favorito
        </h2>
        
        ` 
        getAllFavsAndPrint1(favser)

    } else {
        favnumber.innerHTML += `
        <h2>
            Tienes ${favs.length} favoritos
        </h2>
        ` 
        getAllFavsAndPrint(favs)
    }


    let favmov = getFavsStorage2()
        
        if(favmov.length == 0){
            favnumbermovie.innerHTML = `
            <section>
                <h2>No tienes peliculas favoritas</h2>
            </section>
            `
        } else if(favmov.length == 1) {
            favnumbermovie.innerHTML += `
            <h2>
                Tienes ${favmov.length} pelicula favorita
            </h2>
            ` 
            getAllFavsAndPrint2(favmov)
        } else {
            favnumbermovie.innerHTML += `
            <h2>
                Tienes ${favmov.length} peliculas favoritas
            </h2>
            ` 
            getAllFavsAndPrint2(favmov)
        }

})

function getFavsStorage(){
    let storage = localStorage.getItem('favoritos')

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
           
                <article>
                <a href='./detail-serie.html?id=${data.id}'>
                    <img width ="200px" height = "200px" src='https://image.tmdb.org/t/p/w500/${data.poster_path}'>
                   
                    <h4>${data.name}</h4>
                    </a>
                </article>
          
            `
            })
            .catch(function(error){
                console.log(error)
            })
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
            
                <article>
                <a href='./detail-movie.html?id=${data.id}'>
                    <img width ="200px" height = "200px" src='https://image.tmdb.org/t/p/w500/${data.poster_path}'>
                    <h4>${data.title}</h4>
                    </a>
                </article>
           
            `
        })
        .catch(function(error){
            console.log(error)
        })
    }
}










