import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ButtonApp from './ButtonComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ButtonApp />
  </StrictMode>,
)
