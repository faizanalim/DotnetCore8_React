import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './layout/App.tsx'
import 'semantic-ui-css/semantic.min.css'
import './layout/style.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
