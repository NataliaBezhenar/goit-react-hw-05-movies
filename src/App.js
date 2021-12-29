import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() => import("./views/HomePage/HomePage.js"));
const MoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage.js"));
const MovieCard = lazy(() => import("./views/MovieCard/MovieCard.js"));

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading.....................</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieCard />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
