console.log("hello world, a change");

const movies = [
  { id: 1, title: "Ocean's Eleven", watchlist: true },
  { id: 2, title: "Spiderman - No Way Home", watchlist: true },
  { id: 3, title: "Million Dollar Baby", watchlist: false },
];

const movie_names = movies.map((movie) => movie.title);
console.log(movie_names);

const movie_objects = movies.map((movie) => {
  console.log("Next Movie:", movie);
  return { id: movie.id, title: movie.title };
});

console.log(movie_objects);

const movie_list = movies.map((movie) => "<i>" + movie.title + "</i>");
console.log(movie_list);

// filter
const watchlist = movies.filter((movie) => movie.watchlist);
console.log(watchlist);

const not_watchlist = movies.filter((movie) => {
  console.log("Next Movie", movie);
  return !movie.watchlist;
});

console.log(not_watchlist);

// reduce will produce a result not a collection
const total_ids = movies.reduce((prev, movie) => prev + movie.id, 0);
console.log("Total sum of ids: ", total_ids);
