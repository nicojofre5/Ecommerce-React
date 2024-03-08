import React from "react";
import Productos from "../components/Productos";
function Home()
{
    return(
      <>
      <h1 className="home-head">Promociones de Iphone</h1>
      <div className="cont-card">
        <Productos/>
      </div>
      </>
    );
    
}

export default Home;
