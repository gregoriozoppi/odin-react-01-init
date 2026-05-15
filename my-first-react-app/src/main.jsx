import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Animal from './Components/Animal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Animal />
  </StrictMode>,
)
