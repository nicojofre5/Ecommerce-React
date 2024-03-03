import React from "react";
import mercadolibre from "../img/banner.png";

function imagenbanner() {
  return (
    <div class="container-banner">
      <img src={mercadolibre} class="img-banner" alt="img-mercado"></img>
    </div>
  );
}

export default imagenbanner;
