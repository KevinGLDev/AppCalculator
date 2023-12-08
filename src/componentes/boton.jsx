import React from "react";
import '../stylesheets/Boton.css'

function Boton(props){
    
    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=')
    };

    return(
        <div className={`boton ${esOperador(props.children) ? 'operador': null}`} 
        onClick={ () => props.manejarBoton(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton