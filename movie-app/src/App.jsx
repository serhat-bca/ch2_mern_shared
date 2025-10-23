import { useState } from "react";
import Movie from "./components/Movie";

const App = ({ movies }) => {
  const [movielist, setMovielist] = useState(movies);
  const [movieName, setMovieName] = useState("");
  const [toggle, setToggle] = useState(false);

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
      <ul>
        {movielist.map((m) => (
          <Movie key={m.id} movie={m} />
        ))}
      </ul>
      <h3>Add a new movie</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={movieName} />
        <button type="submit">Add Movie</button>
      </form>

      <h4>Toggle Playground</h4>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Show" : "Hide"}
      </button>
      <p>{toggle.toString()}</p>
    </div>
  );
};

export default App;
