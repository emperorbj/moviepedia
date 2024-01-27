const apiKey = '21e3f055fa996f78a2886737bb6e7957'
// const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=21e3f055fa996f78a2886737bb6e7957'
const containerMovie = document.querySelector('#main')
async function searchMovie(){
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=21e3f055fa996f78a2886737bb6e7957'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results)
    const package = data.results
    containerMovie.innerHTML = ''
    package.map((result)=>{
        const image = result.backdrop_path
        const title = result.original_title

        const html = `<div class="movie-card">
        <div class="image">
            <img src="${image}" alt="movie-image">
        </div>
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="yellow">6.7</span>
        </div>
    </div>`

    containerMovie.insertAdjacentHTML('afterbegin',html)
})
}

searchMovie()
