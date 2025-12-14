
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import themePersonalizado from './themes/thema1'
import { ThemeProvider } from '@mui/material'



createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={themePersonalizado}>
        <App />
    </ThemeProvider>
)
