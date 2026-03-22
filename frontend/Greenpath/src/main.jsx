import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'https://greenpath-backend-99uf.onrender.com';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
