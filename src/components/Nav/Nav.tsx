import { useTranslation } from 'react-i18next'
import { useLang } from '../../context/lang'
import { useTheme } from '../../context/theme'
import useNav from '../../hooks/useNav'
import { GithubIcon, LinkedInIcon, MoonlightIcon, SunlightIcon } from '../Icons/Icons'
import NavLink from '../NavLink/NavLink'
import './Nav.css'
import { useEffect, useRef, useState } from 'react'

export default function Nav() {
    const { isOpen, Icon, openMenu, closeMenu } = useNav()
    const { toggleTheme, isDark } = useTheme()
    const { isSpanish, isEnglish, toEnglish, toSpanish } = useLang()
    const { t } = useTranslation()
    const closeButtonRef = useRef<HTMLElement>(null)
    const [isLarge, setLarge] = useState(() => {
        return window.innerWidth >= 1024
    })

    useEffect(() => {
        const handleResize = () => {
            setLarge(window.innerWidth >= 1024)
        }

        addEventListener('resize', handleResize)

        return () => { removeEventListener('resize', handleResize) }
    }, [])

    const handleIconClick = () => {
        if (isLarge) return

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
                        <NavLink to='/' activeClassName='app-nav-element-active' onClick={handleIconClick}>{t('home')}</NavLink>
                        <NavLink to='/about' activeClassName='app-nav-element-active' onClick={handleIconClick}>{t('about')}</NavLink>
                        <NavLink to='/skills' activeClassName='app-nav-element-active' onClick={handleIconClick}>{t('skills')}</NavLink>
                        <NavLink to='/projects' activeClassName='app-nav-element-active' onClick={handleIconClick}>{t('projects')}</NavLink>
                        <NavLink to='/contact' activeClassName='app-nav-element-active' onClick={handleIconClick}>{t('contact')}</NavLink>
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
                        <a href='https://github.com/irubenboy' target='_blank' rel='noreferrer'><GithubIcon /></a>
                        <a href='https://www.linkedin.com/in/ruben-moreno-50b779199/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
                        <span onClick={toggleTheme}>
                            {
                                isDark
                                    ? <SunlightIcon />
                                    : <MoonlightIcon />
                            }
                        </span>
                    </div>
                    <span onClick={handleIconClick} className='app-nav-btn-icon' ref={closeButtonRef}><Icon /></span>
                </nav>
            </div >
        </header >
    )
}
