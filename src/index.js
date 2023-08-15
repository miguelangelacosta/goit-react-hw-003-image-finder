import React from 'react';

import App from './App';
import { createRoot } from 'react-dom'; // Importa createRoot directamente desde 'react-dom'

import './index.css';

// Utiliza createRoot para renderizar tu aplicación
const rootElement = document.getElementById('root');

// Utiliza createRoot para renderizar tu aplicación
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
