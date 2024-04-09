// function to fetch latest movies
// async function searchMovie(){
//     const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=21e3f055fa996f78a2886737bb6e7957'
//     const response = await fetch(url)
//     const data = await response.json()
//     containerMovie.innerHTML = ''
//     console.log(data.results)
//     const getMovie = data.results
    
//     getMovie.map((result)=>{
//         const image = 'https://image.tmdb.org/t/p/w500' +  result.poster_path
//         const title = result.original_title
//         const rating = result.vote_average
//         const html = `
//         <div class="movie-card">
//         <img src="${image}" alt="movie-image">
//     </div>
// `

// containerMovie.insertAdjacentHTML('beforeend',html)

// })

// }

// searchMovie()






// const searchMovie = document.querySelector('.search')
// const inputMovie = searchMovie.value

// function showBySearch(){
//     async function searchByName(){
//         try{
//             const url = `https://api.themoviedb.org/3/search/movie?api_key=21e3f055fa996f78a2886737bb6e7957&query=${inputMovie}`
//             const response = await fetch(url)
//             const data = await response.json()
//             console.log(data.results)
            
//             const getAnimations = data.results

//             getAnimations.map((result)=>{
//                 const image = 'https://image.tmdb.org/t/p/w500' +  result.poster_path
//                 const title = result.original_title
//                 const rating = result.vote_average
        
//                 const html = `
//                 <div class="movie-series">
//                 <img src="${image}" alt="movie-image">
//             </div>
//         `
        
//         containerSeries.insertAdjacentHTML('beforeend',html)
        
        
        
//         })
//         } catch(error){
//             console.log('Error fetching data : error')
//         }
    
//     }
//     // containerSeries.innerHTML = '';
//     searchSeries()
// }