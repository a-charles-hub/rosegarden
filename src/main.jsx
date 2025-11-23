import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactRom from "react-dom/client";
import './index.css'
import App from './App.jsx'

ReactRom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
