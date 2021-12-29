import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<h1>This is Movies Page</h1>} />
      </Routes>
    </Container>
  );
}

export default App;
