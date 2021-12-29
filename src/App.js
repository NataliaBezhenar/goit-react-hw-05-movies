import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import MovieCard from "./views/MovieCard/MovieCard";

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieCard />} />
      </Routes>
    </Container>
  );
}

export default App;
