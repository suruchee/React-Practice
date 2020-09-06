import * as generAPI from "./fakeGenreService";
const movies = [
  {
    _id: "as12",
    title: "terminator",
    genre: { _id: "as12", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03",
    liked: true,
  },
  {
    _id: "as1233",
    title: "terminator2",
    genre: { _id: "as1233", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03",
  },
  {
    _id: "as1244",
    title: "terminator3",
    genre: { _id: "as1244", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03",
  },
];
export function getMovies() {
  return movies;
}
export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m.id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = generAPI.genre.find((g) => g._id === movie.generId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;
}
