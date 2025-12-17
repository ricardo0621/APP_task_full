
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import themePersonalizado from './themes/thema1'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store/store'



createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <ThemeProvider theme={themePersonalizado}>
        <App />
    </ThemeProvider>
    </Provider>
)
