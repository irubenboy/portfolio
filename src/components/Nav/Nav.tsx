import { useTheme } from '../../context/theme'
import useNav from '../../hooks/useNav'
import { GithubIcon, LinkedInIcon, MoonlightIcon, SunlightIcon } from '../Icons/Icons'
import NavLink from '../NavLink/NavLink'
import './Nav.css'

export default function Nav() {
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
        <header className='app-header'>
            <div className={`container ${isOpen ? 'app-nav-active' : ''}`}>
                <nav className='app-nav'>
                    <div className='app-nav-profile'>
                        <img src='/images/profile.png' />
                    </div>

                    <div className='app-nav-menu'>
                        <NavLink to='/' activeClassName='app-nav-element-active'>Home</NavLink>
                        <NavLink to='/about' activeClassName='app-nav-element-active'>About me</NavLink>
                        <NavLink to='/skills' activeClassName='app-nav-element-active'>Skills</NavLink>
                        <NavLink to='/projects' activeClassName='app-nav-element-active'>Projects</NavLink>
                        <NavLink to='/contact' activeClassName='app-nav-element-active'>Contact</NavLink>
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
    )
}
