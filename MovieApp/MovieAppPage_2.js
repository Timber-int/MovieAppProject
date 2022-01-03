const url = new URL(location);

const movie = JSON.parse(url.searchParams.get('movie'));

const moviePoster = document.querySelector('.movie-poster');

const movieImage = document.createElement("img");
movieImage.classList.add('movie_cart');

const movieNameEn = document.querySelector('.movie_nameEn');
const movieNameRu = document.querySelector('.movie_nameRu');
const movieGenre = document.querySelector('.movie_genre');
const movieCountry = document.querySelector('.movie_country');
const movieYear = document.querySelector('.movie_year');

movieImage.src = movie.posterUrl;
moviePoster.appendChild(movieImage);

movieNameEn.innerHTML = `Original movie name: ${movie.nameEn}`;
movieNameRu.innerHTML = `Назва фільму: ${movie.nameRu}`;
movieGenre.innerHTML = `Країна виробник: ${movie.countries.map((country) => ` ${country.country}`)}`;
movieCountry.innerHTML = `Жанр фільму: ${movie.genres.map((genre) => ` ${genre.genre}`)}`;
movieYear.innerHTML = `Рік випуску: ${movie.year}`;



