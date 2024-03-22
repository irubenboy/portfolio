import './App.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { ThemeProvider } from '../../context/theme'
import Routes from '../../Routes/Routes'

function App() {
    return (
        <ThemeProvider>
            <Nav />
            <main className='app-main'>
                <Routes />
            </main>
            <Footer />
        </ThemeProvider>
    )
}

export default App
