import useNav from '../../hooks/useNav'
import { CopyrightIcon, GithubIcon, LinkedInIcon, MoonlightIcon } from '../Icons/Icons'
import './App.css'

function App() {
    const { isOpen, Icon, openMenu, closeMenu } = useNav()

    const handleIconClick = () => {
        if (isOpen) {
            closeMenu()
            return
        }

        openMenu()
    }

    return (
        <>
            <header className='app-header'>
                <div className={`container ${isOpen ? 'app-nav-active' : ''}`}>
                    <nav className='app-nav'>
                        <span onClick={handleIconClick} className='app-nav-btn-icon'><Icon /></span>
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
