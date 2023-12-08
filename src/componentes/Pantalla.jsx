import React from "react";
import '../stylesheets/Pantalla.css'

const Pantalla = ({valor}) => {
    return(
        <div className="pantalla">
            {valor}
        </div>
    )
}

export default Pantalla