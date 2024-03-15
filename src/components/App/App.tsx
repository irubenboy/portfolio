import MenuIcon from '@mui/icons-material/Menu'
import CopyrightIcon from '@mui/icons-material/Copyright'
import MoonlightIcon from '@mui/icons-material/DarkMode'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './App.css'

function App() {
    return (
        <>
            <header className='app-header'>
                <div className='container'>
                    <nav className='app-nav'>
                        <MenuIcon />
                        <h1 className='app-nav-title'>irudev</h1>
                        <div className='app-nav-menu'>
                            <span>Home</span>
                            <span>Nav 1</span>
                            <span>Nav 2</span>
                            <span>Nav 3</span>
                            <span>Nav 4</span>
                            <span>Nav 5</span>
                        </div>
                        <div className='app-nav-social-icons'>
                            <GithubIcon />
                            <LinkedInIcon />
                        </div>
                        <MoonlightIcon />
                    </nav>
                </div>
            </header>
            <main className='app-main'>
                Coming soon...
            </main>
            <footer className='app-footer'>
                <CopyrightIcon /> irudev
            </footer>
        </>
    )
}

export default App
