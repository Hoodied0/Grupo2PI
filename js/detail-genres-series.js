let query = location.search
let queryObj = new URLSearchParams(query)
let id = queryObj.get("id")

let url = "https://api.themoviedb.org/3/discover/tv?api_key=02e0e755b1f9c129e53aa7c8af3d9868&with_genres=" + id  
console.log(url)

fetch(url)
.then(function(response){
return response.json()
}
)
.then(function(data){
console.log(data)
let listageneroserie = document.querySelector(".row1");

for (let i = 0; i < data.results.length; i++){
    listageneroserie.innerHTML += 
        
       `
       <a href="./detail-serie.html?id=${data.results[i].id}">
       <div class="card">

       <div class="card-header">
           <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="shrek2" />
       </div>
       <div class="card-body">
           <span class="duracion">${data.results[i].first_air_date}</span>
           <h4>
           ${data.results[i].name}
           </h4>
           <p>
           ${data.results[i].overview}
           </p>

        </div>
        </div>
        </a>
   `
     
    }


})
.catch(function(error) {
    console.log("Error: " + error);
})