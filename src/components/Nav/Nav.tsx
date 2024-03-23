import { useTranslation } from 'react-i18next'
import { useLang } from '../../context/lang'
import { useTheme } from '../../context/theme'
import useNav from '../../hooks/useNav'
import { GithubIcon, LinkedInIcon, MoonlightIcon, SunlightIcon } from '../Icons/Icons'
import NavLink from '../NavLink/NavLink'
import './Nav.css'

export default function Nav() {
    const { isOpen, Icon, openMenu, closeMenu } = useNav()
    const { toggleTheme, isDark } = useTheme()
    const { isSpanish, isEnglish, toEnglish, toSpanish } = useLang()
    const { t } = useTranslation()

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
                        <NavLink to='/' activeClassName='app-nav-element-active'>{t('home')}</NavLink>
                        <NavLink to='/about' activeClassName='app-nav-element-active'>{t('about')}</NavLink>
                        <NavLink to='/skills' activeClassName='app-nav-element-active'>{t('skills')}</NavLink>
                        <NavLink to='/projects' activeClassName='app-nav-element-active'>{t('projects')}</NavLink>
                        <NavLink to='/contact' activeClassName='app-nav-element-active'>{t('contact')}</NavLink>
                    </div>
                    <div className='app-nav-langs'>
                        <span
                            className={isSpanish() ? 'app-nav-lang-active' : ''}
                            onClick={toSpanish}
                        >
                            ES
                        </span>
                        /
                        <span
                            className={isEnglish() ? 'app-nav-lang-active' : ''}
                            onClick={toEnglish}
                        >
                            EN
                        </span>
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
            </div >
        </header >
    )
}
