# 🎬 Sprint 3 -- IT Academy

## Video Management Tool -- Core Logic Implementation

This repository contains my solution for **Sprint 3 of IT Academy**,
where we had to develop the internal logic for filtering, sorting, and
transforming a set of movies.

## 📌 Sprint Objective

Implement the complete logic to manipulate an array of more than 250
movies using **JavaScript ES6**, ensuring that all functions
passed the automated tests provided in the project.

## 🛠️ Implemented Functionalities

All functions were developed in `src/films.js`.

- getAllDirectors(array)
  Returns an array containing all directors.

- getMoviesFromDirector(array, director)
  Filters all movies directed by a specific director.

- moviesAverageOfDirector(array, director)
  Calculates a director's average rating.

- orderAlphabetically(array)
  Returns a list of up to 20 titles sorted alphabetically.

- orderByYear(array)
  Sorts movies by year and, in case of a tie, by title.

- moviesAverageByCategory(array, genre)
  Calculates the average rating of all movies in a given genre.

- hoursToMinutes(array)
  Converts the duration of a "Xh Ymin" format to minutes.

- bestFilmOfYear(array, year)
  Returns the best film of a given year.

## 🧪 Tests

The project includes a complete set of automated tests in:

```
tests/films.spec.js
```

To run them:

```bash
npm install
npm run test:watch
```

Then open **test-results.html** using the VSCode Live Server extension to view the results.

---

## 🚀 How to clone

```bash
git clone <this-repo>
npm install
npm run test:watch
```
