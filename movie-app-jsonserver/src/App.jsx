import { useState } from "react";
import Movie from "./components/Movie";
import AddMovieForm from "./components/AddMovieForm";
import FilteredMovies from "./components/FilteredMovies";
import Toggle from "./components/Toggle";

const App = ({ movies }) => {
  const [movielist, setMovielist] = useState(movies);
  const [movieName, setMovieName] = useState("");
  const [toggle, setToggle] = useState(false);

  const filteredMovies = toggle
    ? movielist.filter((m) => m.watchlist)
    : movielist;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Label: ", movieName);
    const mvObj = {
      id: Date.now(),
      title: movieName,
      watchlist: false,
    };
    // setMovielist([...movielist, mvObj]);
    setMovielist(movielist.concat(mvObj));
    setMovieName("");
  };

  const handleChange = (e) => {
    setMovieName(e.target.value);
  };

  return (
    <div>
      <h2>Movies</h2>
      <Toggle toggle={toggle} setToggle={setToggle} />
      <FilteredMovies filteredMovies={filteredMovies} />
      <AddMovieForm
        movieName={movieName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
