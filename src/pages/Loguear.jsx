import React from "react";

function Loguear()
{
    return(
        <div class="cont-gral-form">
            <form action="/" method="post" class="form-login">
                <label for="user">
                   Usuario
                </label>
                <input type="text" name="user" id="" required placeholder="Ingresar usuario" />
                <label for="pass">
                   Password
                </label>
                <input type="password" name="pass" id="" required placeholder="Ingresar password" />
                <div class="cont-button-submit">
                    <button type="submit" class="enviar-form">Enviar</button>
                </div>
              </form>
        </div>
    )
}

export default Loguear;