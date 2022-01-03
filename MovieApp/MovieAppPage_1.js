const API_KEY = '6d1f9088-1a83-4bee-b171-7063323caa15';
const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=5';
const API_URL_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';

getMovies(API_URL_POPULAR);

async function getMovies(url) {
    const response = await fetch(url, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'X-API-KEY': API_KEY,
        },
    });

    const respData = await response.json();
    showMovies(respData);
}

function getClassByRate(rating) {
    if (rating >= 8) {
        return 'green';
    } else if (rating >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

function showMovies(data) {
    const moviesEl = document.querySelector('.movies');

    document.querySelector('.movies').innerHTML = '';

    data.films.forEach(movie => {
        const movieEl = document.createElement("div");
        movieEl.classList.add('movie');

        movieEl.onclick = function (e) {
            e.preventDefault();

            location.href = `MovieAppPage_2.html?movie=${JSON.stringify(movie)}`;
        }

        movieEl.innerHTML = ` 
 <div class="movie_cover-inner">
<img 
src=${movie.posterUrlPreview}
 alt=${movie.nameRu} 
 class="movie_cover"
 />
                <div class="movie_cover--darkened"></div>
            </div>

            <div class="movie_info">
                <div class="movie_title">${movie.nameRu}</div>
                <div class="movie_category">${movie.genres.map((genre) => ` ${genre.genre}`)}</div>
                <div class="movie_average  movie_average--${getClassByRate(movie.rating)}">${movie.rating}</div>
            </div>`

        moviesEl.append(movieEl);
    });
}

const form = document.querySelector('form');
const search = document.querySelector('.header_search');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
    if (search.value) {
        getMovies(apiSearchUrl);
    }

    search.value = '';
})
