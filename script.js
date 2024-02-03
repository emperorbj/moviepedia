
const containerMovie = document.querySelector('.movie-container')

async function searchMovie(){
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=21e3f055fa996f78a2886737bb6e7957'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results)
    const getMovie = data.results
    containerMovie.innerHTML = ''
    getMovie.map((result)=>{
        const image = 'https://image.tmdb.org/t/p/w500' +  result.poster_path
        const title = result.original_title
        const rating = result.vote_average

        const html = `
        <div class="movie-card">
        <img src="${image}" alt="movie-image">
    </div>
`

containerMovie.insertAdjacentHTML('beforeend',html)



})
}

searchMovie()


