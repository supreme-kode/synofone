import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import css saya
import './style.css'

// import react-router-dom
import { BrowserRouter } from 'react-router-dom'

// import css react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
