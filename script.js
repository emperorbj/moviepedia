
const containerMovie = document.querySelector('.movie-container')
const containerKids = document.querySelector('.movie-container-kids')
const containerSeries = document.querySelector('.movie-container-series')



async function searchMovie(){
    containerMovie.innerHTML = ''
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=21e3f055fa996f78a2886737bb6e7957'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results)
    const getMovie = data.results
    
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



function showKids(){
    async function searchAnimations(){
        try{
            const url = 'https://api.themoviedb.org/3/discover/movie?api_key=21e3f055fa996f78a2886737bb6e7957&with_genres=16'
            const response = await fetch(url)
            const data = await response.json()
            console.log(data.results)
            const getAnimations = data.results
            // contKids.innerHTML = ''
            getAnimations.map((result)=>{
                const image = 'https://image.tmdb.org/t/p/w500' +  result.poster_path
                const title = result.original_title
                const rating = result.vote_average
                const html = `
                <div class="movie-kids">
                <img src="${image}" alt="movie-image">
            </div>
        `
        
        containerKids.insertAdjacentHTML('beforeend',html)
        
        
        
        })
        } catch(error){
            console.log('Error fetching data : error')
        }

}
    
    searchAnimations()
}
showKids()



function showSeries(){
    async function searchSeries(){
        try{
            const url = 'https://api.themoviedb.org/3/discover/movie?api_key=21e3f055fa996f78a2886737bb6e7957&with_genres=10770'
            const response = await fetch(url)
            const data = await response.json()
            console.log(data.results)
            const getAnimations = data.results
            getAnimations.map((result)=>{
                const image = 'https://image.tmdb.org/t/p/w500' +  result.poster_path
                const title = result.original_title
                const rating = result.vote_average
        
                const html = `
                <div class="movie-series">
                <img src="${image}" alt="movie-image">
            </div>
        `
        
        containerSeries.insertAdjacentHTML('beforeend',html)
        
        
        
        })
        } catch(error){
            console.log('Error fetching data : error')
        }
    
    }
    searchSeries()
}

showSeries()
