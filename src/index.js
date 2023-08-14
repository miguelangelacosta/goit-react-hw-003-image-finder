import React from 'react';
// Debes importar ReactDOM
import App from './components/App';
import { createRoot } from 'react-dom'; // Importa createRoot directamente desde 'react-dom'

import './index.css';

// Utiliza createRoot para renderizar tu aplicación
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
