import Movie from "./Movie";

const FilteredMovies = ({ filteredMovies }) => {
  return (
    <div>
      <ul>
        {filteredMovies.map((m) => (
          <Movie key={m.id} movie={m} />
        ))}
      </ul>
    </div>
  );
};

export default FilteredMovies;
