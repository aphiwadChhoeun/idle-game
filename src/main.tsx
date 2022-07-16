import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import CurrencyProvider from './providers/CurrencyProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </React.StrictMode>
)
