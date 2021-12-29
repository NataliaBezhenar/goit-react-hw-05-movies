import "./App.css";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<h1>This is Home Page</h1>} />
        <Route path="/movies" element={<h1>This is Movies Page</h1>} />
      </Routes>
    </Container>
  );
}

export default App;
