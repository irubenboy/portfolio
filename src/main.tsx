import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import { BrowserRouter } from 'react-router-dom'

const root: Element = document.getElementById('root') ?? document.getElementsByTagName('body')[0]

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
