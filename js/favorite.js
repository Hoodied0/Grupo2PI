let favnumber = document.querySelector('.favoritelist')
let containerserie = document.querySelector('.favorite-series');
let containermovie = document.querySelector('.favorite-movie')
let id = localStorage.getItem('favoritos')
let apiKey = "?api_key=282ba42024158eda7c391efcdc7bbf53&language=en-US"
let url1 ="https://api.themoviedb.org/3/movie/" + id + apiKey
console.log(url1)

window.addEventListener('load', function(){
    let favs = getFavsStorage()
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
    } else {
        favnumber.innerHTML += `
        <h2>
            Tienes ${favs.length} favoritos
        </h2>
        ` 
        getAllFavsAndPrint(favs)
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

function getAllFavsAndPrint(arrFavs){
    
    for(let i = 0; i < arrFavs.length ; i++){
        fetch(`https://api.themoviedb.org/3/movie/${arrFavs[i]}?api_key=a4ec5a496172e67f219cf69a6790a8ca/`)
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            containermovie.innerHTML += `
            
                <article>
                <img src="https://image.tmdb.org/t/p/w500${data.results.US.buy[i].logo_path}" class="imagen">
                </article>
            
            `
        })
        .catch(function(error){
            console.log(error)
        })
    }
}