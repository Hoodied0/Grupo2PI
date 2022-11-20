let favnumber = document.querySelector('.favoritelist')
let containerserie = document.querySelector('.favorite-series');
let containermoviegi = document.querySelector('.favorite-movie')

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
        fetch(`https://fakestoreapi.com/products/${arrFavs[i]}`)
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            container.innerHTML += `
            <li>
                <article>
                    <img class='imagen' src='${data.image}' >
                    <a href='./details.html?id=${data.id}'>
                    <h5>${data.title}</h5>
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