import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode> {//habilitamos modo stricto para ver errores en el desarrollo
    } 
    <BrowserRouter> {// nos da la posibilidad de crear subpaginas
    }
      <App />
    </BrowserRouter>,
  </StrictMode>
)

