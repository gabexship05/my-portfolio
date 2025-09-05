// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'                    // Home page
import Electronics from './pages/Electronics.jsx'
import Brain from './pages/Brain.jsx'          // ← NEW
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/brain" element={<Brain />} />   {/* ← NEW */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
