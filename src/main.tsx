import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import StatsProvider from './providers/StatsProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <StatsProvider>
      <App />
    </StatsProvider>
  // </React.StrictMode>
)
