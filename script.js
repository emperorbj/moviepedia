// TO TOGGLE ICON MENU//
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active')
}




// selecting relevant elements and tags
const containerMovie = document.querySelector('.movie-container')
const containerKids = document.querySelector('.movie-container-kids')
const containerSeries = document.querySelector('.movie-container-series')


const searchInput = document.querySelector('.search');






// Function to fetch latest movies

// function to fetch latest movies
async function searchLatest(){
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=21e3f055fa996f78a2886737bb6e7957'
    const response = await fetch(url)
    const data = await response.json()
    containerMovie.innerHTML = ''
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

searchLatest()





async function searchMovie(query) {
    try {
        // Replace with your actual API key
        const url = `https://api.themoviedb.org/3/search/movie?api_key=21e3f055fa996f78a2886737bb6e7957&query=${query}`;
        const response = await fetch(url);
        const data = await response.json();

        containerMovie.innerHTML = '';

        if (data.results) {
            const getMovies = data.results;

            getMovies.forEach((result) => {
                const image = 'https://image.tmdb.org/t/p/w500' + result.poster_path;
                const title = result.original_title;
                const rating = result.vote_average;

                const html = `
                    <div class="movie-card">
                        <img src="${image}" alt="movie-image">
                    </div>
                `;

                containerMovie.insertAdjacentHTML('beforeend', html);
            });
        } else {
            console.log('No results found.');
        }
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

// Event listener for search input
// searchInput.addEventListener('input', function () {
//     const searchTerm = searchInput.value.trim();

//     if (searchTerm !== '') {
//         searchMovie(searchTerm);
//     }
// });


// function that fetches movie animations
function showKids(){
    async function searchAnimations(){
        try{
            const url = 'https://api.themoviedb.org/3/discover/movie?api_key=21e3f055fa996f78a2886737bb6e7957&with_genres=16'
            const response = await fetch(url)
            const data = await response.json()
            containerKids.innerHTML = ''
            console.log(data.results)
            const getAnimations = data.results
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


// function that fetches movie series
function showSeries(){
    async function searchSeries(){
        try{
            const url = 'https://api.themoviedb.org/3/discover/movie?api_key=21e3f055fa996f78a2886737bb6e7957&with_genres=10770'
            const response = await fetch(url)
            const data = await response.json()
            console.log(data.results)
            containerSeries.innerHTML = ''
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



// ... (your existing code)

// Selecting relevant elements and tags


// ... (the rest of your existing code)










