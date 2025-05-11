import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

return (
  <div className="min-h-screen bg-blue-50 flex items-center justify-center">
    <h1 className="text-3xl font-bold text-blue-700">
      ¡Tailwind está funcionando!
    </h1>
  </div>
);