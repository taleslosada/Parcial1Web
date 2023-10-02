import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './home';
import Login from  './login';
import './App.css';
import PartDetail from './partDetail';
import { IntlProvider } from 'react-intl';

import messages_es from './es.json';
import messages_en from './en.json';

function App() {
  const locale = navigator.language; 
  const messages = locale === 'es-ES' || locale === 'es' ? messages_es : messages_en;

  return (
    <IntlProvider locale={locale} messages={messages}>
    <Router>
    <div className="App">
    <header className="App-header">
        <h1>Aplicación de Inicio de Sesión</h1>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/car/:carModel" element={<PartDetail />} /> 
      </Routes>
    </div>
    </Router>
    </IntlProvider>
  );
}

export default App;
