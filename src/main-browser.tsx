import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppBrowser from './AppBrowser.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppBrowser />
  </StrictMode>,
)
