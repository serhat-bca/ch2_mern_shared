import React from "react";

const AddMovieForm = ({ movieName, handleChange, handleSubmit }) => {
  return (
    <div>
      <h3>Add a new movie</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={movieName} />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
