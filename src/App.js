import React from 'react';
import './App.css'; 
import Login from './login'; 
import Home from './home';
import partDetail from './partDetail'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de Inicio de Sesión</h1>
      </header>
      <main>
        <Login /> {}
      </main>
    </div>
  );
}

export default App;
