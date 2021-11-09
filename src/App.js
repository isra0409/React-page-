import React from 'react';
import './css/App.css';

import Prueba from './components/Prueba';
import Banners from './components/Banners';
import Estados from './components/Estados';
import Ternarios from './components/Ternarios';
import Formulario from './components/Formulario';
import Carrusel from './components/Carrusel';
import Listas from './components/Listas';

function App() {

  
  return (
    <div className="App">
      <header className="App-header"> 
        
        <Prueba />
        <Carrusel />
        <Estados />
        <Ternarios />
        <Formulario />
        <Banners />
        <Listas />


      </header>
    </div>
  ); 
}

export default App;
