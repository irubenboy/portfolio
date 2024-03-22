import './App.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { ThemeProvider } from '../../context/theme'
import Routes from '../../Routes/Routes'
import { LangProvider } from '../../context/lang'

function App() {
    return (
        <LangProvider>
            <ThemeProvider>
                <Nav />
                <main className='app-main'>
                    <Routes />
                </main>
                <Footer />
            </ThemeProvider>
        </LangProvider>
    )
}

export default App
