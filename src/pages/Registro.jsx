import React from "react";

function Registro() {
  return (
    <div class="container-form">
      <form>
        <label>Usuario</label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
        <input type="checkbox" checked="checked" /> Remember me
        <button type="button" class="cancelbtn">
          {" "}
          Cancel
        </button>
    
      </form>
    </div>
  );
}

export default Registro;
