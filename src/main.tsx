import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'

const root: Element = document.getElementById('root') ?? document.getElementsByTagName('body')[0]

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
