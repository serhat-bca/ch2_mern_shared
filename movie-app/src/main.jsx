import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const movies = [
  { id: 1, title: "Inception", watchlist: true },
  { id: 2, title: "The Matrix", watchlist: false },
  { id: 3, title: "Interstellar", watchlist: true },
  { id: 4, title: "Parasite", watchlist: false },
  { id: 5, title: "The Godfather", watchlist: true },
  { id: 6, title: "Pulp Fiction", watchlist: false },
  { id: 7, title: "Avengers: Endgame", watchlist: true },
];

createRoot(document.getElementById("root")).render(<App movies={movies} />);
