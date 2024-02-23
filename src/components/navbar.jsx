import React from "react";

function navbar() {
  return (
    <nav class="nav-bar">
      <ul class="menu">
        <li>
          <a href="index.html" class="nav-link">
            Inicio
          </a>
        </li>
        <li>
          <a href="registro.html" class="nav-link">
            Registro
          </a>
        </li>
        <li>
          <a href="login.html" class="nav-link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
