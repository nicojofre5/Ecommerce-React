import React from "react";

function Producto(props) {
  return (
    <>
      
      <div class="cont-card">
        <div class="card">
          <h1>{props.nombre}</h1>
          <picture>
            <img src={props.imagen} alt="Imagen nike" />
          </picture>
          <div class="cont-precio">
            <h2> $ {props.precio}</h2>
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
    </>
  );
}

export default Producto;
