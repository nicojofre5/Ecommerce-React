import "./App.css";
import NavBar from "./components/navbar"
import BannerInicial from "./components/bannerinicial";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Rutas from "./components/Rutas";
import mercadolibre from "../src/img/banner.png";
function App() {
  return (
    <Router>
      <BannerInicial />
      <NavBar />
      <div class="container-banner">
        <img src={mercadolibre} class="img-banner"></img>
      </div>
      <Rutas />
    </Router>
  );
}

export default App;
