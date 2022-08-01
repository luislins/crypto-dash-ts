import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import ContextProvider from "./contexts/Context"
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
)
