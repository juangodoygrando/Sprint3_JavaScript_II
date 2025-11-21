function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);

  return result;
}

function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);

  return result;
}

function moviesAverageOfDirector(array, director) {
  let directorMovies = array.filter((array) => array.director === director);

  let sumOfScore = directorMovies.reduce((acc, movie) => acc + movie.score, 0);

  if (directorMovies.length != 0) {
    let result = sumOfScore / directorMovies.length;
    return result;
  }
}

function orderAlphabetically(array) {
  let titlesArray = array.map((array) => array.title);

  let result = titlesArray.sort().slice(0, 20);

  return result;
}

function orderByYear(array) {
  let moviesCopy = [...array];

  let result = moviesCopy.sort(function (a, b) {
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

function moviesAverageByCategory(array, genre) {
  let genreMovies = array.filter((movie) => movie.genre.includes(genre));

  let scoreSum = genreMovies.reduce((acc, movie) => acc + movie.score, 0);
  let result = 0;
  if (genreMovies.length === 0) {
    result = 0;
  } else {
    result = Number((scoreSum / genreMovies.length).toFixed(2));
  }

  return result;
}

function hoursToMinutes(array) {
  const convertedMovies = array.map((movie) => {
    const parts = movie.duration.split(' ');

    const hoursPart = parts.find((p) => p.includes('h'));
    const hours = hoursPart ? Number(hoursPart.slice(0, -1)) : 0;

    const minsPart = parts.find((p) => p.includes('min'));
    const minutes = minsPart ? Number(minsPart.slice(0, -3)) : 0;

    const total = hours * 60 + minutes;

    return {
      ...movie,
      duration: total
    };
  });

  return convertedMovies;
}

function bestFilmOfYear(array, year) {
  let filteredArray = array.filter((movie) => movie.year === year);

  let highestScoreMovie = [];

  filteredArray.forEach((element) => {
    if (
      highestScoreMovie.length === 0 ||
      element.score > highestScoreMovie[0].score
    ) {
      highestScoreMovie = [element];
    }
  });

  return highestScoreMovie;
}

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
