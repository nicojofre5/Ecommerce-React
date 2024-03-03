import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Loguear";
import Registro from "../pages/Registro";
import {Link} from "react-router-dom";
function navbar() {
  return (
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
  );
}

export default navbar;
