import { useTheme } from '../../context/theme'
import useNav from '../../hooks/useNav'
import { CopyrightIcon, GithubIcon, LinkedInIcon, MoonlightIcon, SunlightIcon } from '../Icons/Icons'
import './App.css'

function App() {
    const { isOpen, Icon, openMenu, closeMenu } = useNav()
    const { toggleTheme, isDark } = useTheme()

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
                        <div className='app-nav-profile'>
                            <img src='/images/profile.png' />
                        </div>

                        <div className='app-nav-menu'>
                            <span>Home</span>
                            <span>About me</span>
                            <span>Skills</span>
                            <span>Projects</span>
                            <span>Contact</span>
                        </div>
                        <div className='app-nav-langs'>
                            <span>ES</span> / <span>EN</span>
                        </div>
                        <div className='app-nav-social-icons'>
                            <span><GithubIcon /></span>
                            <span><LinkedInIcon /></span>
                            <span onClick={toggleTheme}>
                                {
                                    isDark
                                        ? <SunlightIcon />
                                        : <MoonlightIcon />
                                }
                            </span>
                        </div>
                        <span onClick={handleIconClick} className='app-nav-btn-icon'><Icon /></span>
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
