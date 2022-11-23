
/*Koodi joka antaa halutun elokuvan kuvan */
function movieSection(movies){
  return movies.map((movie) => {
    return `
    <img src=${movie.poster_path} data-movie-id=${movie.id}/>
    `;

  })
}

function createMovieContainer(movies) {
  const movieElement = document.createElement('div');
  movieElement.setAttribute('class', 'movie');

  const movieTemplate = `
    <section class="section">
      ${movieSection(movies)}
    </section>
    <div class="content">
    <p id="content-close">X</p>
    </div>
  `;

  movieElement.innerHTML = movieTemplate;
  return movieElement;
}


const API_KEY ='6288b8cf';

const url = 'https://www.omdbapi.com/?apikey=6288b8cf';

const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#movieName');
const movieSearchable = document.querySelector('#movies-searchable');


/*Etsi kentän nappi*/
buttonElement.onclick = function(event) {
  const value = inputElement.value;
  const newUrl = url + '&s=' + value;

  /*http request*/
  fetch(newUrl)
      .then((res) => res.json())
      .then((data) => {
          const movies = data.results;
          const movieBlock = createMovieContainer(movies);
          movieSearchable.appendChild(movieBlock);
          console.log('Data: ', data);
      })
      .catch((error) =>{
        console.log('Error', error);
      });
  console.log('Value: ', value);

} 






