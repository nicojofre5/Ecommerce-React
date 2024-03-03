import React from "react";
import NavBar from '../components/navbar';
import Card from '../img/zapatillas-1nike.webp'
function Home()
{
    return(
      <div class="cont-card">
      <div class="card">
        <h1>Zapatillas Nike</h1>
        <picture>
          <img src={Card} alt="Imagen nike" />
        </picture>
        <div class="cont-precio">
          <h2>Precio $15000</h2>
          <p>La que usaba Marty en Back on the future 2</p>
        </div>
        <div id="cont-aviso"></div>
        <div class="cont-button">
          <button class="comprar" id="comprar" onclick="mostrarCartel()">
            Comprar
          </button>
          <button class="favoritos">Marcar favorito</button>
        </div>
      </div>
    </div>
    );
}

export default Home;
