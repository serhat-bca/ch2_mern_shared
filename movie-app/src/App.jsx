import Movie from "./components/Movie";

const App = ({ movies }) => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((m) => (
          <Movie key={m.id} movie={m} />
        ))}
      </ul>
    </div>
  );
};

export default App;
