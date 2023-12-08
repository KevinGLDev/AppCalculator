import logo from './logo.svg';
import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/Boton-clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input,setInput] = useState('')

  const agregar = valor =>{
    setInput(input+valor)
  }

  const calcular = () =>{
    if(input){
      setInput(evaluate(input))

    }else{
      alert('Calculadora Vacia')
    }
  }
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='titulo'>
            <h1>My calculadora</h1>
        </div>
        <div className='calculadora'>
          <div className='fila'>
          <Pantalla valor = {input}/>
          </div>
          <div className='fila'>
          <Boton manejarBoton = {agregar} >1</Boton>
          <Boton manejarBoton = {agregar} >2</Boton>
          <Boton manejarBoton = {agregar}>3</Boton>
          <Boton manejarBoton = {agregar}>+</Boton>
          </div>
          <div className='fila'>
          <Boton manejarBoton = {agregar}>4</Boton>
          <Boton manejarBoton = {agregar}>5</Boton>
          <Boton manejarBoton = {agregar}>6</Boton>
          <Boton manejarBoton = {agregar}>-</Boton>
          </div> 
          <div className='fila'>
          <Boton manejarBoton = {agregar}>7</Boton>
          <Boton manejarBoton = {agregar}>8</Boton>
          <Boton manejarBoton = {agregar}>9</Boton>
          <Boton manejarBoton = {agregar}>*</Boton>
          </div>
           <div className='fila'>
           <Boton manejarBoton = {agregar}>0</Boton>
           <Boton manejarBoton = {agregar}>.</Boton>
           <Boton manejarBoton = {calcular}>=</Boton>
           <Boton manejarBoton = {agregar}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear = { () => {setInput('')} }/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
