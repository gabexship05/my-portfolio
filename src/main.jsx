import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'              // your existing homepage component
import Electronics from './pages/Electronics.jsx' // we'll create this next
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
