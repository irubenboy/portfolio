import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import { ThemeProvider } from './context/theme.tsx'

const root: Element = document.getElementById('root') ?? document.getElementsByTagName('body')[0]

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />

        </ThemeProvider>
    </React.StrictMode>
)
