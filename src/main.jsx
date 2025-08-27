import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import FavoritesProvider from './contexts/FavoritesProvider.jsx'

import './styles/globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </FavoritesProvider>
  </StrictMode>,
)