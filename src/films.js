// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((array) => array.director);

  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((array) => array.director === director);

  return result;
}

// Exercise 3: Calcula el promedio de las películas de un director determinado.
function moviesAverageOfDirector(array, director) {
  let moviesDirector = array.filter((array) => array.director === director);

  let sumOfScore = moviesDirector.reduce((acc, movie) => acc + movie.score, 0);

  let result = sumOfScore / moviesDirector.length;

  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let arrayTitle = array.map((array) => array.title);

  let result = arrayTitle.sort().slice(0, 20);

  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArray = [...array];

  let result = newArray.sort(function (a, b) {
    if (a.year - b.year === 0) {
      let aTitleStandardized = a.title.toLowerCase().trim();
      let bTitleStandardized = b.title.toLowerCase().trim();
      if (aTitleStandardized < bTitleStandardized) {
        return -1;
      } else if (aTitleStandardized > bTitleStandardized) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return a.year - b.year;
    }
  });

  return result;
}

// Exercise 6: Calcula el promedio de las películas en una categoría
function moviesAverageByCategory(array, genere) {
  let moviesGenre = array.filter((movie) => movie.genre.includes(genere));

  let sumOfScore = moviesGenre.reduce((acc, movie) => acc + movie.score, 0);
  let result = 0;
  if (moviesGenre.length === 0) {
    result = 0;
  } else {
    result = Number((sumOfScore / moviesGenre.length).toFixed(2));
  }

  return result;
}

// Exercise 7: Modifica la duración de las películas a minutos.
function hoursToMinutes() {


}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
