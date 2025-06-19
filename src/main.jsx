import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Create from "../element/Create.jsx";
import Home from "../element/Home.jsx";
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <Create/>
    </BrowserRouter>
  </StrictMode>,
)
