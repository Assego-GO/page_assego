/**
 * ========================================
 * Main.jsx - Ponto de entrada do React
 * ========================================
 * 
 * Este arquivo inicializa a aplicação React
 * e renderiza no elemento #root do HTML
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Renderiza a aplicação
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
