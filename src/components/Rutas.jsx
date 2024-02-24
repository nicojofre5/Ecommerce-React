import React from "react";

function Rutas(){
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/live" element={<Live />} />
        </Routes>
    )
}