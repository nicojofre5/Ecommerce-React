import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Loguear";
import Registro from "./pages/Registro";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import Rutas from "./components/Rutas";
function App() {
  return (

    <>
    <div class="container-hero">
      <h1>mercado subordinado</h1>
    </div>
    <nav class="nav-bar">
      <ul class="menu">
        <Link to="/" element={<Home />} class="nav-link">
          Home
        </Link>
        <Link to="/Loguear" element={<Login />} class="nav-link">
          Login
        </Link>
        <Link to="/Registro" element={<Registro />} class="nav-link">
          Registro
        </Link>
      </ul>
    </nav>
    </>
  );
}

export default App;
